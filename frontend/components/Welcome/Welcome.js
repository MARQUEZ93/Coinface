import React, { Component } from 'react';
//components
import Header from './Header';
import CenterMessage from './CenterMessage';
import FiveBoxes from './FiveBoxes';

class Welcome extends Component {

  render() {
    return (
      <div className="Welcome">
        <Header />
        <CenterMessage />
        <FiveBoxes />
      </div>
    );
  }
}

export default (Welcome);
