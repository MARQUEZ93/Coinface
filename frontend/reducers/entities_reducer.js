import { combineReducers } from 'redux';

import users from './users_reducer';
import assetData from './welcome_assets_data_reducer';
import chartData from './welcome_sparklines_data_reducer';

export default combineReducers({
  users,
  assetData,
  chartData
});
