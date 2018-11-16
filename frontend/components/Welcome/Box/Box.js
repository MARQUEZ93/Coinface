import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TopLayer from './TopLayer';
import MiddleLayer from './MiddleLayer';
import BottomLayer from './BottomLayer';

class Box extends Component {

  constructor(props) {
    super(props);
    this.pushPurchaseSignIn = this.pushPurchaseSignIn.bind(this);
  }

  pushPurchaseSignIn() {
    if (this.props.location.pathname !== "/") {
      this.props.history.push("/buy");
    } else {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div onClick={this.pushPurchaseSignIn} className="Box">
        <TopLayer name={this.props.name} src={this.props.src} />
        <MiddleLayer change={this.props.change} price={this.props.price} symbol={this.props.symbol} />
        <BottomLayer sparklines={this.props.sparklines} ymbol={this.props.symbol} color={this.props.color}/>
      </div>
    );
  }
}

export default withRouter(Box);
