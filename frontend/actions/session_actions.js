import * as APIUtil from '../util/session_api_util';

import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_SESSION_ERRORS } from './types';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
APIUtil.signup(user).then(user => (
  dispatch(receiveCurrentUser(user))
), err => (
  dispatch(receiveErrors(err.responseJSON))
))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
);
