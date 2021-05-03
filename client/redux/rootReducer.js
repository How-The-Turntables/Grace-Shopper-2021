import { combineReducers } from 'redux';

import albumReducer from './albums/reducers';
import artistReducers from './artists/artistReducers';
import cartReducer from './shopping/reducers';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  albums: albumReducer.albumsReducer,
  album: albumReducer.singleAlbumReducer,
  artists: artistReducers.artistsReducer,
  singleArtist: artistReducers.singleArtistReducer,
  cart: cartReducer,
  auth: userReducer
});

export default rootReducer;
