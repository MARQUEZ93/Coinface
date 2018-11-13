import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPrice } from '../../actions/prices_actions';
import PortfolioValue from './PortfolioValue';

const mdp = (dispatch) => (
  {
    getPrice: (symbol) => dispatch(getPrice(symbol))
  }
);

const msp = ({ session, entities }) => (
  {
    wallets: session.wallets,
    prices: entities.currentPrices,
    email: session.email, card: session.card,
    transfers: session.transfers, sellings: session.sellings, purchases: session.purchases,
   receivers: session.receivers
  }
);

export default connect(msp, mdp)(PortfolioValue);
