import { combineReducers } from 'redux';
import albumReducer from './albums/albumReducers';

const rootReducer = combineReducers({
  albums: albumReducer,
});

export default rootReducer;
