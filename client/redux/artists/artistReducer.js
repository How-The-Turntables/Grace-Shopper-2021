import types from '../types/index';


const artistsReducer = (state = [], action) => {
  if (action.type === types.LOAD_ARTISTS) {
    state = action.artists;
  }
  return state;
};

const singleArtistReducer = (state = {}, action) => {
  if (action.type === types.SINGLE_ARTIST) {
    state = action.singleArtist;
  }
  return state;
};

const artistReducers = {
  artistsReducer,
  singleArtistReducer,
};
export default artistReducers;
