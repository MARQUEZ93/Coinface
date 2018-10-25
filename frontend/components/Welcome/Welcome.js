import React, { Component } from 'react';
//components
import Header from './Header';
import CenterMessage from './CenterMessage';
import FiveBoxes from './FiveBoxes';
import Footer from './Footer';
import GetStarted from './GetStarted';
import CustomersServed from './CustomersServed';

class Welcome extends Component {


  render() {
    return (
      <div className="WelcomeComponent">
        <div className="Welcome">
          <Header />
          <CenterMessage />
        </div>
        <FiveBoxes />
        <CustomersServed />
        <GetStarted />
        <Footer />
      </div>
    );
  }
}

export default (Welcome);
