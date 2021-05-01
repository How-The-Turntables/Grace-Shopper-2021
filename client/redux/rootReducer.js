import { combineReducers } from 'redux';

import albumReducer from './albums/reducers';
import artistReducers from './artists/artistReducers';
import cartReducer from './shopping/reducers';

const rootReducer = combineReducers({
  albums: albumReducer,
  artists: artistReducers.artistsReducer,
  singleArtist: artistReducers.singleArtistReducer,
  cart: cartReducer,
});

export default rootReducer;
