import {
  RECEIVE_SESSION_ERRORS,
  SIGNUP_USER,
  LOGIN_USER,
  CLEAR_ERRORS
} from '../../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case SIGNUP_USER:
      return [];
    case LOGIN_USER:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
