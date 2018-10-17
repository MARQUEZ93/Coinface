import * as APIUtil from '../util/session_api_util';

export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

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

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(signUpUser(user))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(loginUser(user))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
);
