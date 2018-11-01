import { combineReducers } from 'redux';

import session from './sessions/session_reducer';

const rootReducer = combineReducers({
  session
});

export default rootReducer;
