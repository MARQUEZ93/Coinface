import * as APIUtil from '../util/prices_api';

export const RECEIVE_PRICE = 'RECEIVE_PRICE';
export const RECEIVE_SPARKLINES = 'RECEIVE_SPARKLINES';

export const receivePrice = response => ({
  type: RECEIVE_PRICE,
  response
});

export const receiveSparklines = (response, symbol) => ({
  type: RECEIVE_SPARKLINES,
  response,
  symbol
});

export const getPrice = symbol => dispatch => (
  APIUtil.getPrice(symbol).then(response => (
    dispatch(receivePrice(response))
    ))
);

export const getSparklines = symbol => dispatch => (
  APIUtil.getSparklines(symbol).then(response => (
    dispatch(receiveSparklines(response, symbol))
    ))
);
