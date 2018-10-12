import { FETCH_ASSETS } from '../actions/types';

export default function(state=[], action) {
  switch(action.type) {
    case FETCH_ASSETS:
      return [ action.payload.data, ...state ];
  }
  return state;
}
