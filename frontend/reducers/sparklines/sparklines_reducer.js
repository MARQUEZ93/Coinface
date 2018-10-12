import { combineReducers } from 'redux';

import BTC_SPARKLINES from './BTC_reducer';
import ETC_SPARKLINES from './ETC_reducer';
import ETH_SPARKLINES from './ETH_reducer';
import LTC_SPARKLINES from './LTC_reducer';
import BCH_SPARKLINES from './BCH_reducer';

export default combineReducers({
  BTC_SPARKLINES,
  BCH_SPARKLINES,
  ETC_SPARKLINES,
  ETH_SPARKLINES,
  LTC_SPARKLINES
});
