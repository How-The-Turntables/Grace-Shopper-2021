import types from './albumTypes';
const initialState = {
  albums: [],
  album: {},
};
const albumReducer = (state = initialState, action) => {
  if (action.type === types.LOAD_ALBUMS) {
    state = action.students;
  } else if (action.type === types.SINGLE_ALBUM) {
    state = action.album;
  } else if (action.type === types.EDIT_ALBUM) {
    const allAlbums = state.albums.map((album) =>
      album.id === action.album.id ? action.album : album
    );
    state = { ...state, albums: [...allAlbums] };
  }
  return state;
};

export default albumReducer;
