import {
  SIGNUP_USER
} from '../../actions/session_actions';

import {
  GET_USER
} from '../../actions/user_actions';

import merge from 'lodash/merge';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case SIGNUP_USER:
      return merge({}, oldState, {[action.user.id]:action.user});
    case GET_USER:
      return merge({}, oldState, {[action.user.id]:action.user});
    default:
      return oldState;
  }
};

export default UsersReducer;
