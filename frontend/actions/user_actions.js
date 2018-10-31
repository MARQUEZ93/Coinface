import * as APIUtil from '../util/user_api_util';
import {loginUser} from './session_actions';

export const GET_USER = 'GET_USER';
export const GET_TRANSFER = 'GET_TRANSFER';
export const LOGIN_USER = 'LOGIN_USER';
export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id).then(user => dispatch(getUser(user)))
);

const getUser = user => ({
  type: GET_USER,
  user
});

export const processTransfer = transfer => dispatch => (
  APIUtil.processTransfer(transfer).then(user => dispatch(loginUser(user)))
);

const getTransfer = transfer => ({
  type: GET_TRANSFER,
  transfer
});
