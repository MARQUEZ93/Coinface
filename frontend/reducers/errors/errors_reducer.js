import { combineReducers } from 'redux';

import session from '../sessions/session_errors_reducer';
import transfer from './transfer_errors_reducer';
import selling from './selling_errors_reducer';
import purchase from './purchase_errors_reducer';

export default combineReducers({
  session,
  transfer,
  selling,
  purchase
});
