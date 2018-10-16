import React, { Component } from 'react';
//components
import Header from './Header';
import CenterMessage from './CenterMessage';
import FiveBoxes from './FiveBoxes';
import Footer from './Footer';

class Welcome extends Component {

  render() {
    return (
      <div>
        <div className="Welcome">
          <Header />
          <CenterMessage />
        </div>
        <FiveBoxes />
        <Footer />
    </div>
    );
  }
}

export default (Welcome);
