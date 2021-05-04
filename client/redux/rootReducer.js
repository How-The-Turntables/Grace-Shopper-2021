import { combineReducers } from 'redux';

import albumReducers from './albums/albumReducer';
import artistReducers from './artists/artistReducer';
import cartReducer from './shopping/shoppingReducer';
import userReducer from './user/userReducer';
import adminReducers from './admin/adminReducer';

const rootReducer = combineReducers({
  albums: albumReducers.albumsReducer,
  singleAlbum: albumReducers.singleAlbumReducer,
  artists: artistReducers.artistsReducer,
  singleArtist: artistReducers.singleArtistReducer,
  cart: cartReducer,
  auth: userReducer,
  orders: adminReducers.ordersReducer,
});

export default rootReducer;
