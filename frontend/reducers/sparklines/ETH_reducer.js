import { ETH_SPARKLINES } from '../../actions/types';

export default function(state=[], action) {
  switch(action.type) {
    case ETH_SPARKLINES:
      const ETH = action.payload.data.Data;
      return [ ETH, ...state ];
  }
  return state;
}
