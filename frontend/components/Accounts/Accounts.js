import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Dashboard/Header';
import NavBar from './NavBar';
import Footer from '../Welcome/Footer';
import YourAccounts from './YourAccounts';

class Accounts extends Component {
  render() {
    return (
      <div className="Accounts">
        <Header firstName={this.props.firstName} middleName={this.props.middleName}
          lastName={this.props.lastName} action={this.props.logout}/>
        <NavBar />
        <YourAccounts />
        <Footer />
      </div>
    );
  }
}

export default Accounts;
