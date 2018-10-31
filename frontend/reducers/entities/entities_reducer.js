import { combineReducers } from 'redux';

import users from './users_reducer';
import transfers from './transfers_reducer';

export default combineReducers({
  users, transfers
});
