import React, { Component } from 'react';
import YourAccountWallets from './YourAccountWallets';
import SendPopup from './SendPopup';

class YourAccounts extends Component {
  render() {
    return (
      <div className="YourAccounts">
        <div className="headerYA"><p>Your Accounts</p></div>
        <YourAccountWallets wallets={this.props.wallets} cash={this.props.cash}
          receivers={this.props.receivers}
          transfers={this.props.transfers} sellings={this.props.sellings}
          purchases={this.props.purchases}/>
      </div>
    );
  }
}

export default YourAccounts;
