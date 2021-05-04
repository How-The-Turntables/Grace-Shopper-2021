import { combineReducers } from 'redux';

import albumReducers from './albums/albumReducer';
import artistReducers from './artists/artistReducer';
import cartReducer from './shopping/shoppingReducer';
import userReducer from './user/userReducer';
import adminReducers from './admin/adminReducer';
import albumReducer from './reviews/reviewReducer';

const rootReducer = combineReducers({
  albums: albumReducers.albumsReducer,
  singleAlbum: albumReducers.singleAlbumReducer,
  artists: artistReducers.artistsReducer,
  singleArtist: artistReducers.singleArtistReducer,
  cart: cartReducer,
  auth: userReducer,
  orders: adminReducers.ordersReducer,
  reviews: albumReducer.albumReviews,
  newReview: albumReducer.addReview
});

export default rootReducer;
