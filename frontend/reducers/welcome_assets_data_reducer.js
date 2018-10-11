import { FETCH_WELCOME_DECIMAL_DATA } from '../actions/types';

export default function(state=[], action) {
  switch(action.type) {
    case FETCH_WELCOME_DECIMAL_DATA:
      return [ action.payload.data, ...state ];
  }
  return state;
}
