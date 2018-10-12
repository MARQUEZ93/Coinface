import { BTC_SPARKLINES } from '../../actions/types';

export default function(state=[], action) {
  switch(action.type) {
    case BTC_SPARKLINES:
      const BTC = action.payload.data.Data;
      return [ BTC, ...state ];
  }
  return state;
}
