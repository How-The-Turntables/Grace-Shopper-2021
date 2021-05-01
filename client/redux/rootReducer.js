import { combineReducers } from 'redux';


import albumReducer from './albums/reducers';
import artistReducers from './artists/artistReducers';


const rootReducer = combineReducers({
  albums: albumReducer,
  artists: artistReducers.artistsReducer,
  singleArtist: artistReducers.singleArtistReducer,
});

export default rootReducer;
