import {
  GET_TRANSFER
} from '../../actions/user_actions';

import merge from 'lodash/merge';

const TransfersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case GET_TRANSFER:
      return merge({}, oldState, {[action.transfer.id]:action.transfer});
    default:
      return oldState;
  }
};

export default TransfersReducer;
