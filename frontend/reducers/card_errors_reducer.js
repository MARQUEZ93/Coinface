import {
  RECEIVE_CARD_ERRORS, LOGIN_USER, CLEAR_CARD_ERRORS
} from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CARD_ERRORS:
      return action.errors;
    case LOGIN_USER:
      return [];
    case CLEAR_CARD_ERRORS:
      return [];
    default:
      return state;
  }
};
