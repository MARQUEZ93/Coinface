import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import SignOut from './SignOut';

const mdp = (dispatch) => (
  {
    action: () => dispatch(logout())
  }
);

export default connect(null, mdp)(SignOut);
