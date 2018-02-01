import React, { Component } from 'react';
import Sunburst from 'components/Sunburst';
import data from 'data/diversity';

class PieExample extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-sm-4'>
          <Sunburst
            data={data}
            onSelect={this.onSelect}
            scale='linear' // or exponential
            tooltipContent={<div class="tooltip1" style="color:'black'; z-index:10; background: #e2e2e2; padding: 5px; text-align: center;" />} // eslint-disable-line
            tooltip
            tooltipPosition='right'
            keyId='sunburst1'
            width='480'
            height='400'
          />
        </div>
        <div className='offset-sm-4 col-sm-4'>
          <Sunburst
            data={data}
            onSelect={this.onSelect}
            scale='linear' // or exponential
          tooltipContent={<div class="tooltip2" style="color:'black'; z-index:10; background: #e2e2e2; padding: 5px; text-align: center;" />} // eslint-disable-line
            tooltip
            tooltipPosition='right'
            keyId='sunburst2'
            width='480'
            height='400'
          />
        </div>
      </div>
    );
  }
}

export default PieExample;
