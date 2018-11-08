//React/Redux
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
//Components
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id, firstName: window.currentUser.firstName,
        middleName: window.currentUser.middleName, lastName: window.currentUser.lastName,
        email: window.currentUser.email, wallets: window.currentUser.wallets,
        card: window.currentUser.card, transfers: window.currentUser.transfers, sellings: window.currentUser.sellings,
        purchases: window.currentUser.purchases, receivers: window.currentUser.receivers },
      entities: { currentPrices: { BTC: null, LTC: null, ETH: null, ETC: null, BCH: null },
        currentChanges: { BTC: null, LTC: null, ETH: null, ETC: null, BCH: null },
        currentSparklines: { BTC: null, LTC: null, ETH: null, ETC: null, BCH: null } }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
