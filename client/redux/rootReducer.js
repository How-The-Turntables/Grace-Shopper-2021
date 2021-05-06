import { combineReducers } from 'redux';

import albumReducers from './albums/albumReducer';
import artistReducers from './artists/artistReducer';
import cartReducer from './shopping/shoppingReducer';
import userReducers from './user/userReducer';
import adminReducers from './admin/adminReducer';
import albumReducer from './reviews/reviewReducer';

const rootReducer = combineReducers({
  albums: albumReducers.albumsReducer,
  singleAlbum: albumReducers.singleAlbumReducer,
  artists: artistReducers.artistsReducer,
  singleArtist: artistReducers.singleArtistReducer,
  cart: cartReducer,
  auth: userReducers.userReducer,
  userOrders: userReducers.userOrdersReducer,
  orders: adminReducers.ordersReducer,
  users: adminReducers.usersReducer,
  promoteUser: adminReducers.editUserReducer,
  selectedUser: adminReducers.singleUserReducer,
  editedUser: userReducers.editUserReducer,
  reviews: albumReducer.albumReviews,
  newReview: albumReducer.addReview
});

export default rootReducer;
