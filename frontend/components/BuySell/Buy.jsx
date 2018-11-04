import React, { Component } from 'react';
import Header from '../Dashboard/Header';
import NavBar from '../Accounts/NavBar';
import Footer from '../Welcome/Footer';
import BuyAsset from './BuyAsset';

class Buy extends Component {
  render() {
    return (
      <div className="Buy">
        <Header firstName={this.props.firstName} middleName={this.props.middleName}
          lastName={this.props.lastName} action={this.props.action}/>
        <NavBar />
        <BuyAsset />
        <Footer />
      </div>
    );
  }
}

export default Buy;
