import { FETCH_WELCOME_24HR_SPARKLINES_DATA } from '../actions/types';

export default function(state=[], action) {
  switch(action.type) {
    case FETCH_WELCOME_24HR_SPARKLINES_DATA:
      return [ action.payload.data, ...state ];
  }
  return state;
}
