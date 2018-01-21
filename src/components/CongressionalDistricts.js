import React, { Component } from 'react';
import * as topojson from 'topojson';
import * as d3 from 'd3';

class CongressionalDistricts extends Component {
  constructor() {
    super();
    this.state = {
      usData: null,
      usCongress: null,
    };
  }

  componentWillMount() {
    // Load Data
    d3.queue()
      .defer(d3.json, 'data/us.json')
      .defer(d3.json, 'data/us-congress-113.json')
      .await((err, usData, usCongress) => {
        this.setState({
          usData,
          usCongress,
        });
      });
  }

  componentDidUpdate() {
    // render D3
    const svg = d3.select(this.refs.anchor);
    const { width, height } = this.props;
    const { usData, usCongress } = this.state;

    const projection = d3.geoAlbers()
      .scale(1280)
      .translate([ width / 2, height / 2 ]);

    const path = d3.geoPath(projection);
    const us = usData;
    const congress = usCongress;

    // Pure copypasta starts here
    svg.append('defs').append('path')
      .attr('id', 'land')
      .datum(topojson.feature(us, us.objects.land))
      .attr('d', path);

    svg.append('clipPath')
      .attr('id', 'clip-land')
      .append('use')
      .attr('xlink:href', '#land');

    svg.append('g')
      .attr('class', 'districts')
      .attr('clip-path', 'url(#clip-land)')
      .selectAll('path')
      .data(topojson.feature(congress, congress.objects.districts).features)
      .enter()
      .append('path')
      .attr('d', path)
      .append('title')
      .text(d => d.id);

    svg.append('path')
      .attr('class', 'district-boundaries')
      .datum(topojson.mesh(congress, congress.objects.districts, (a, b) =>
        a !== b && (a.id / 1000 | 0) === (b.id / 1000 | 0)))
      .attr('d', path);

    svg.append('path')
      .attr('class', 'state-boundaries')
      .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
      .attr('d', path);
  }

  render() {
    const { usData, usCongress } = this.state;

    if (!usData || !usCongress) {
      return null;
    }

    return (
      <g ref='anchor' />
    );
  }
}

export default CongressionalDistricts;
