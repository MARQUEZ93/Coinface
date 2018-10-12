import React, { Component } from 'react';
import TopLayer from './TopLayer';
import MiddleLayer from './MiddleLayer';
import Chart from './BottomLayer';

class Box extends Component {

  render() {
    return (
      <div className="Box">
        <TopLayer name={this.props.name} src={this.props.src} />
        <MiddleLayer symbol={this.props.symbol} />
        <BottomLayer />
      </div>
    );
  }
}
export default Box;
