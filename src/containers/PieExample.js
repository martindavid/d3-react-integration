import React, { Component } from 'react';
import Sunburst from 'components/Sunburst';
import data from 'data/diversity';

class PieExample extends Component {
  render() {
    return (
      <div>
        <Sunburst
          data={data}
          onSelect={this.onSelect}
          scale='linear' // or exponential
          tooltipContent={<div class="sunburstTooltip" style="color:'black'; z-index:10; background: #e2e2e2; padding: 5px; text-align: center;" />} // eslint-disable-line
          tooltip
          tooltipPosition='right'
          keyId='anagraph'
          width='480'
          height='400'
        />
      </div>
    );
  }
}

export default PieExample;
