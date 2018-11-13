import React, { Component } from 'react';
import Header from '../../Dashboard/Header';
import NavBar from '../../Accounts/NavBar';
import Footer from '../../Welcome/Footer';
import SellAsset from './SellAssetContainer';

class Sell extends Component {
  render() {
    return (
      <div className="Buy">
        <Header firstName={this.props.firstName} middleName={this.props.middleName}
          lastName={this.props.lastName} action={this.props.action}/>
        <NavBar />
        <SellAsset />
        <Footer />
      </div>
    );
  }
}

export default Sell;
