import { BCH_SPARKLINES } from '../../actions/types';

export default function(state=[], action) {
  switch(action.type) {
    case BCH_SPARKLINES:
      const BCH = action.payload.data.Data;
      return [ BCH, ...state ];
  }
  return state;
}
