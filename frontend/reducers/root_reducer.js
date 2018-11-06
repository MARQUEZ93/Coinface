import { combineReducers } from 'redux';

import session from './sessions/session_reducer';
import errors from './errors_reducer';
import entities from './entities/entities_reducer';

const rootReducer = combineReducers({
  entities,
  session,
  errors
});

export default rootReducer;
