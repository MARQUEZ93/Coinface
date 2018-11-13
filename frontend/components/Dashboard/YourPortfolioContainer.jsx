import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPrice } from '../../actions/prices_actions';
import { deleteCard, processCard, processPurchase } from '../../actions/session_actions';
import YourPortfolio from './YourPortfolio';

const mdp = (dispatch) => (
  {
    getPrice: (symbol) => dispatch(getPrice(symbol))
  }
);

const msp = ({ session, entities }) => (
  {
    wallets: session.wallets,
    prices: entities.currentPrices
  }
);

export default connect(msp, mdp)(YourPortfolio);
