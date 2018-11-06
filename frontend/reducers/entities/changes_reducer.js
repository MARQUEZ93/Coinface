import {
  RECEIVE_PRICE
} from '../../actions/prices_actions';

import merge from 'lodash/merge';
import _ from 'lodash';

const _nullChanges = Object.freeze({
  BTC: null,
  ETH: null,
  ETC: null,
  BCH: null,
  LTC: null
});

const changesReducer = (state = _nullChanges, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PRICE:
      let newState = merge({}, state);
      let asset = action.response.RAW.FROMSYMBOL;
      newState[asset] = _.round(action.response.RAW.CHANGEPCT24HOUR, 2);
      return newState;
    default:
      return state;
  }
};

export default changesReducer;
