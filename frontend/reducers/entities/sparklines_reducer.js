import {
  RECEIVE_SPARKLINES
} from '../../actions/prices_actions';

import merge from 'lodash/merge';

const _nullSparklines= Object.freeze({
  BTC: null,
  ETH: null,
  ETC: null,
  BCH: null,
  LTC: null
});

const sparklinesReducer = (state = _nullSparklines, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SPARKLINES:
      let newState = merge({}, state);
      let prices = action.response.Data.map(el=>(el.open));
      let asset = action.symbol;
      newState[asset] = action.response.Data.map(el=>(el.open));
      return newState;
    default:
      return state;
  }
};

export default sparklinesReducer;
