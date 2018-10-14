import React, { Component } from 'react';
//components
import Header from './Header';
import CenterMessage from './CenterMessage';
import FiveBoxes from './FiveBoxes';

class Welcome extends Component {

  render() {
    return (
      <div>
      <div className="Welcome">
        <Header />
        <CenterMessage />
      </div>
      <FiveBoxes />
    </div>
    );
  }
}

export default (Welcome);
