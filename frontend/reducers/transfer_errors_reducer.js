import {
  RECEIVE_TRANSFER_ERRORS, LOGIN_USER
} from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRANSFER_ERRORS:
      return action.errors;
    case LOGIN_USER:
      return [];
    default:
      return state;
  }
};
