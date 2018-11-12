import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPrice } from '../../actions/prices_actions';
import { deleteCard, processCard, processPurchase } from '../../actions/session_actions';
import BuyAsset from './BuyAsset';

const mdp = (dispatch) => (
  {
    addCard: (card) => dispatch(processCard(card)),
    destroyCard: () => dispatch(deleteCard()),
    getPrice: (symbol) => dispatch(getPrice(symbol)),
    makePurchase: (purchase) => dispatch(processPurchase(purchase))
  }
);

const msp = ({ session, entities }) => (
  {
    email: session.email, wallets: session.wallets,
    transfers: session.transfers, sellings: session.sellings, purchases: session.purchases,
    receivers: session.receivers, firstName: session.firstName,
    middleName: session.middleName, lastName: session.lastName,
    card: session.card,
    prices: entities.currentPrices, id: session.id
  }
);

export default connect(msp, mdp)(BuyAsset);
