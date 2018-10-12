import React, { Component } from 'react';
import Chart from './Chart';
import ImageAsset from './ImageAsset';

class Div extends Component {

  render() {
    const data = this.props.chartData;
    return (
      <div className="chartBox">
      <ImageAsset src={this.props.src} symbol={this.props.symbol} />
      </div>
    );
  }
}
export default Div;
