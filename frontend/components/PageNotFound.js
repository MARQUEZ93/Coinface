import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from './Welcome/Header';

class PageNotFound extends Component {

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
          <h1 className="PNFHeader">{"PAGE NOT FOUND"}</h1>
          <p className="PNFP">Sorry we {"couldn't"} find what you were looking {"for"}.</p>
          <button className="PNFButton" onClick={this.onClick}>Back to Coinface ›</button>
        </div>
      </div>
    );
  }
}

export default withRouter(PageNotFound);
