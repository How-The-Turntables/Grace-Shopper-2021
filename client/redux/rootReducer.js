import { combineReducers } from 'redux';
import { albumReducer, filterSort } from './albums/reducers';
import artistReducer from './artists/artistReducers';

const rootReducer = combineReducers({
  albums: albumReducer,
  artists: artistReducer,
});

export default rootReducer;
