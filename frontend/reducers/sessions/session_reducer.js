import {
  LOGIN_USER,
  SIGNUP_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_TRANSFER,
  RECEIVE_CARD,
  REMOVE_CARD,
  RECEIVE_PURCHASE,
  RECEIVE_SELLING
} from '../../actions/session_actions';

import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  id: null,
  email: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SIGNUP_USER:
      return { id: action.user.id, email: action.user.email, wallets: action.user.wallets,
      transfers: action.user.transfers, sellings: action.user.sellings, purchases: action.user.purchases,
      card: action.user.card, receivers: action.user.receivers, firstName: action.user.firstName,
    middleName: action.user.middleName, lastName: action.user.lastName  };
    case LOGIN_USER:
      return { id: action.user.id, email: action.user.email, wallets: action.user.wallets,
      transfers: action.user.transfers, sellings: action.user.sellings, purchases: action.user.purchases,
      card: action.user.card, receivers: action.user.receivers, firstName: action.user.firstName,
    middleName: action.user.middleName, lastName: action.user.lastName };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    case RECEIVE_TRANSFER:
      let newState = merge({}, state);
      newState.transfers.push(action.transfer);
      return newState;
    case RECEIVE_CARD:
      let newState1 = merge({}, state);
      newState1.card = action.card;
      return newState1;
    case REMOVE_CARD:
      let newState2 = merge({}, state);
      newState2.card = null;
      return newState2;
    case RECEIVE_PURCHASE:
      let newState3 = merge({}, state);
      newState.purchases.push(action.purchase);
      return newState3;
    case RECEIVE_SELLING:
      let newState4 = merge({}, state);
      newState.transfers.push(action.selling);
      return newState4;
    default:
      return state;
  }
};

export default sessionReducer;
