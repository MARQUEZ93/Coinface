import * as APIUtil from '../util/user_api_util';

export const GET_USER = 'GET_USER';
export const GET_TRANSFER = 'GET_TRANSFER';

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id).then(user => dispatch(getUser(user)))
);

const getUser = user => ({
  type: GET_USER,
  user
});

export const processTransfer = transfer => dispatch => (
  APIUtil.processTransfer(transfer).then(transfer => dispatch(getTransfer(transfer)))
);

const getTransfer = transfer => ({
  type: GET_TRANSFER,
  transfer
}); 
