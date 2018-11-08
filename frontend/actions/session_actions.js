import * as APIUtil from '../util/session_api_util';

export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const RECEIVE_TRANSFER_ERRORS = 'RECEIVE_TRANSFER_ERRORS';
export const CLEAR_TRANSFER_ERRORS = 'CLEAR_TRANSFER_ERRORS';
export const RECEIVE_TRANSFER = 'RECEIVE_TRANSFER';

export const RECEIVE_CARD_ERRORS = 'RECEIVE_CARD_ERRORS';
export const CLEAR_CARD_ERRORS = 'CLEAR_CARD_ERRORS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARd';

export const clearCardErrors = () => ({
  type: CLEAR_CARD_ERRORS
});

export const removeCard= () => {
  return {
    type: REMOVE_CARD
  };
};

export const receiveCard = card => ({
  type: RECEIVE_CARD,
  card
});

export const clearTransferErrors = () => ({
  type: CLEAR_TRANSFER_ERRORS
});

export const receiveTransfer = transfer => ({
  type: RECEIVE_TRANSFER,
  transfer
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

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
  APIUtil.processTransfer(transfer).then(transfer => (
    dispatch(receiveTransfer(transfer))
    ), err => (
    dispatch(transferErrors(err.responseJSON))
  ))
);

export const processCard = card => dispatch => (
  APIUtil.processCard(card).then(card => (
    dispatch(receiveCard(card))
    ), err => (
    dispatch(cardErrors(err.responseJSON))
  ))
);

export const deleteCard = () => dispatch => (
  APIUtil.deleteCard().then( () => (
    dispatch(removeCard()))
));
