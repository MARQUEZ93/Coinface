import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import Accounts from './Accounts';

const mdp = (dispatch) => (
  {
    logout: () => dispatch(logout())
  }
);

const msp = ({ session }) => (
  {
    email: session.email, firstName: session.firstName,
    middleName: session.middleName, lastName: session.lastName
  }
);

export default connect(msp, mdp)(Accounts);
