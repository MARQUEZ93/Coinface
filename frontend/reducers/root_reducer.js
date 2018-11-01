import { combineReducers } from 'redux';

import session from './sessions/session_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({
  session,
  errors
});

export default rootReducer;
