import React, { Component } from 'react';
import YourAccountWallets from './YourAccountWallets';
import SendPopup from './SendPopup';

class YourAccounts extends Component {
  render() {
    return (
      <div className="YourAccounts">
        <div className="headerYA"><p>Your Accounts</p></div>
        <YourAccountWallets />
      </div>
    );
  }
}

export default YourAccounts;
