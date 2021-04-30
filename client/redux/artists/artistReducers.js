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
  } else if (action.type === types.CREATE_ARTIST) {
    state = [...state, action.newArtist];
  } else if (action.type === types.EDIT_ARTIST) {
    return state.map((artist) =>
      artist.id !== action.artist.id ? artist : action.artist
    );
  }
  return state;
};

export default artistReducer;
