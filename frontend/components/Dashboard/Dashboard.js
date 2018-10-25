import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './Header';
import NavBar from './NavBar';
import PortfolioValue from './PortfolioValue';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <Header firstName={this.props.firstName} lastName={this.props.lastName} action={this.props.action}/>
        <NavBar />
        <PortfolioValue email={this.props.email} transfers={this.props.transfers} sellings={this.props.sellings}
          purchases={this.props.purchases} receivers={this.props.receivers}
          wallets={this.props.wallets} />
      </div>
    );
  }
}

const mdp = (dispatch) => (
  {
    action: () => dispatch(logout())
  }
);

const msp = ({ session }) => (
  {
    email: session.email, wallets: session.wallets,
    transfers: session.transfers, sellings: session.sellings, purchases: session.purchases,
    cash: session.cash, receivers: session.receivers, firstName: session.firstName,
    lastName: session.lastName
  }
);

export default connect(msp, mdp)(Dashboard);
