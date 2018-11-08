import {
  RECEIVE_SELLING_ERRORS, LOGIN_USER, CLEAR_SELLING_ERRORS
} from '../../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SELLING_ERRORS:
      return action.errors;
    case LOGIN_USER:
      return [];
    case CLEAR_SELLING_ERRORS:
      return [];
    default:
      return state;
  }
};
