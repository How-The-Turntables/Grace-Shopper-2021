import { combineReducers } from 'redux';
import albumReducer from './albums/reducers';

const rootReducer = combineReducers({
  albums: albumReducer,
});

export default rootReducer;
