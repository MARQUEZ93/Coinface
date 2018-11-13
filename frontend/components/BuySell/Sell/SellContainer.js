import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout, deleteCard, processCard } from '../../../actions/session_actions';
import Sell from './Sell';

const mdp = (dispatch) => (
  {
    action: () => dispatch(logout()),
  }
);

const msp = ({ session }) => (
  {
   firstName: session.firstName,
    middleName: session.middleName, lastName: session.lastName
  }
);

export default connect(msp, mdp)(Sell);
