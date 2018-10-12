import { ETC_SPARKLINES } from '../../actions/types';

export default function(state=[], action) {
  switch(action.type) {
    case ETC_SPARKLINES:
    const ETC = action.payload.data.Data;
      return [ ETC, ...state ];
  }
  return state;
}
