import { LTC_SPARKLINES } from '../../actions/types';

export default function(state=[], action) {
  switch(action.type) {
    case LTC_SPARKLINES:
      const LTC = action.payload.data.Data;
      return [ LTC, ...state ];
  }
  return state;
}
