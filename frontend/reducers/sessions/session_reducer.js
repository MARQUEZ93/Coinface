import {
  LOGIN_USER,
  SIGNUP_USER,
  LOGOUT_CURRENT_USER,
} from '../../actions/session_actions';

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
      cash: action.user.cash, receivers: action.user.receivers };
    case LOGIN_USER:
      return { id: action.user.id, email: action.user.email, wallets: action.user.wallets,
      transfers: action.user.transfers, sellings: action.user.sellings, purchases: action.user.purchases,
      cash: action.user.cash, receivers: action.user.receivers };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
