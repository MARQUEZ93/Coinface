import * as APIUtil from '../util/session_api_util';

export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_TRANSFER_ERRORS = 'RECEIVE_TRANSFER_ERRORS';

export const signUpUser = user => ({
  type: SIGNUP_USER,
  user
});

export const loginUser = user => ({
  type: LOGIN_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const transferErrors = errors => ({
  type: RECEIVE_TRANSFER_ERRORS,
  errors
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(signUpUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(loginUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
);

export const processTransfer = transfer => dispatch => (
  APIUtil.processTransfer(transfer).then(user => (
    dispatch(loginUser(user))
    ), err => (
    dispatch(transferErrors(err.responseJSON))
  ))
);
