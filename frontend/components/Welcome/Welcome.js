import React, { Component } from 'react';
//components
import Header from './Header';
import CenterMessage from './CenterMessage';
import FiveBoxes from './FiveBoxes';
import Footer from './Footer';
import GetStarted from './GetStarted';

class Welcome extends Component {


  render() {
    return (
      <div className="WelcomeComponent">
        <div className="Welcome">
          <Header />
          <CenterMessage />
        </div>
        <FiveBoxes />
        <GetStarted />
        <Footer />
      </div>
    );
  }
}

export default (Welcome);
