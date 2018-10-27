import React, { Component } from 'react';
import YourAccountWallets from './YourAccountWallets';

class YourAccounts extends Component {
  render() {
    return (
      <div className="YourAccounts">
        <div className="headerYA"><p>Your Accounts</p></div>
        <div className="walletsTransactionsYA">
          <YourAccountWallets wallets={this.props.wallets} cash={this.props.cash} />
          <div className="transactionsYA"></div>
        </div>
      </div>
    );
  }
}

export default YourAccounts;
