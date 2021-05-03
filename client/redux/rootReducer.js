import { combineReducers } from 'redux';

import albumReducer from './albums/reducers';
import artistReducers from './artists/artistReducers';
import cartReducer from './shopping/reducers';
import userReducer from './user/userReducer';
import adminReducers from './admin/adminReducer';

const rootReducer = combineReducers({
  albums: albumReducer,
  artists: artistReducers.artistsReducer,
  singleArtist: artistReducers.singleArtistReducer,
  cart: cartReducer,
  auth: userReducer,
  orders: adminReducers.ordersReducer,
});

export default rootReducer;
