import React, { Component } from 'react';

class YourAccounts extends Component {
  render() {
    return (
      <div className="YourAccounts">
        <div className="headerYA"> <p>Your Account</p></div>
        <div className="walletsTransactionsYA">
          <div className="walletsYA"></div>
          <div className="transactionsYA"></div>
        </div>
      </div>
    );
  }
}

export default YourAccounts;
