import {
  RECEIVE_PRICE
} from '../../actions/prices_actions';

import merge from 'lodash/merge';

const _nullPrices = Object.freeze({
  BTC: null,
  ETH: null,
  ETC: null,
  BCH: null,
  LTC: null
});

const pricesReducer = (state = _nullPrices, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PRICE:
      let newState = merge({}, state);
      let asset = action.response.RAW.FROMSYMBOL;
      newState[asset] = action.response.RAW.PRICE.toFixed(2);
      return newState;
    default:
      return state;
  }
};

export default pricesReducer;
