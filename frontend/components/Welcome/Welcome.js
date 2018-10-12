import React, { Component } from 'react';
//components
import Header from './Header';
import CenterMessage from './CenterMessage';
import Five from './Five';

class Welcome extends Component {

  render() {
    return (
      <div className="Welcome">
        <Header />
        <CenterMessage />
        <Five />
      </div>
    );
  }
}

export default (Welcome);
