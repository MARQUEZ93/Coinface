import React, { Component } from 'react';
import TopLayer from './TopLayer';
import MiddleLayer from './MiddleLayer';
import BottomLayer from './BottomLayer';

class Box extends Component {

  render() {
    return (
      <div className="Box">
        <TopLayer name={this.props.name} src={this.props.src} />
        <MiddleLayer symbol={this.props.symbol} />
        <BottomLayer symbol={this.props.symbol} color={this.props.color}/>
      </div>
    );
  }
}
export default Box;
