import {
  RECEIVE_PURCHASE_ERRORS, LOGIN_USER, CLEAR_PURCHASE_ERRORS
} from '../../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PURCHASE_ERRORS:
      return action.errors;
    case LOGIN_USER:
      return [];
    case CLEAR_PURCHASE_ERRORS:
      return [];
    default:
      return state;
  }
};
