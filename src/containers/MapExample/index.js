import React, { Component } from 'react';
import CongressionalDistricts from 'components/CongressionalDistricts';


class MapExample extends Component {
  render() {
    return (
      <div >
        <h3>Map Example</h3>
        <br />
        <svg width='960' height='600'>
          <CongressionalDistricts width={960} height={600} />
        </svg>
      </div>
    );
  }
}

export default MapExample;
