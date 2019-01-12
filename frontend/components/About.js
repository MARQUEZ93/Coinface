import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import Header from './Welcome/Header';

class About extends Component {

  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="PageNotFound">
        <Header />
        <div className="PNFCenter">
          <h1 className="PNFHeader">{"About Me"}</h1>
          <p className="PNFP">Coinface is a full stack single page app inspired by</p>
          <Link to={'https://www.coinbase.com/'}>Coinbase</Link>
          <p>A user can buy, sell & transfer cryptocurrencies with virtual cash. Coinface is the ideal risk-free environment to measure oneself </p>
          <p>before trading real capital on site such as Coinbase.</p>
          <button className="PNFButton" onClick={this.onClick}>Back to Coinface ›</button>
        </div>
      </div>
    );
  }
}

export default withRouter(About);
