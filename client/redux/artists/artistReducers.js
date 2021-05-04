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
  // extra functionality in case we need it
  // else if (action.type === types.CREATE_ARTIST) {
  //   state = [...state, action.newArtist];
  // } else if (action.type === types.EDIT_ARTIST) {
  //   return state.map((artist) =>
  //     artist.id !== action.artist.id ? artist : action.artist
  //   );
  // } else if (action.type === types.DELETE_ARTIST) {
  //   return state.filter((artist) => artist.id !== action.id);
  // }
  return state;
};

const artistReducers = {
  artistsReducer,
  singleArtistReducer,
};
export default artistReducers;
