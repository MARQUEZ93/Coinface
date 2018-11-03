import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Buy from './Buy';

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
    middleName: session.middleName, lastName: session.lastName
  }
);

export default connect(msp, mdp)(Buy);
