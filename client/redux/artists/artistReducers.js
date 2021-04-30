import types from '../types/index';

const initialState = {
  artists: [],
  singleArtist: {},
};

const artistReducer = (state = initialState, action) => {
  if (action.type === types.LOAD_ARTISTS) {
    state = action.artists;
  } else if (action.type === types.SINGLE_ARTIST) {
    state = action.singleArtist;
  }
  return state;
};

export default artistReducer;
