import { combineReducers } from 'redux';

import users from './users_reducer';
import chartData from './sparklines/sparklines_reducer';

export default combineReducers({
  users,
  chartData
});
