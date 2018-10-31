import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { processTransfer } from '../../actions/user_actions';
import Accounts from './Accounts';

const mdp = (dispatch) => (
  {
    logout: () => dispatch(logout()),
    processTransfer: (user) => dispatch(processTransfer(user))
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

export default connect(msp, mdp)(Accounts);
