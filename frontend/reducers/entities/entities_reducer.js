import { combineReducers } from 'redux';

import currentPrices from './prices_reducer';
import currentChanges from './changes_reducer';
import currentSparklines from './sparklines_reducer';

export default combineReducers({
  currentPrices,
  currentChanges,
  currentSparklines
});
