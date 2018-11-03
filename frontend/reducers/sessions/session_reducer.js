import {
  LOGIN_USER,
  SIGNUP_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_TRANSFER
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
      cash: action.user.cash, receivers: action.user.receivers, firstName: action.user.firstName,
    middleName: action.user.middleName, lastName: action.user.lastName  };
    case LOGIN_USER:
      return { id: action.user.id, email: action.user.email, wallets: action.user.wallets,
      transfers: action.user.transfers, sellings: action.user.sellings, purchases: action.user.purchases,
      cash: action.user.cash, receivers: action.user.receivers, firstName: action.user.firstName,
    middleName: action.user.middleName, lastName: action.user.lastName };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    case RECEIVE_TRANSFER:
      console.log(state);
      let newState = merge({}, state);
      newState.transfers.push(action.transfer.id);
      console.log(newState.transfers);
      newState.transfers[action.transfer.id] = action.transfer;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
