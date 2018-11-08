import {
  RECEIVE_TRANSFER_ERRORS, LOGIN_USER, CLEAR_TRANSFER_ERRORS
} from '../../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRANSFER_ERRORS:
      return action.errors;
    case LOGIN_USER:
      return [];
    case CLEAR_TRANSFER_ERRORS:
      return [];
    default:
      return state;
  }
};
