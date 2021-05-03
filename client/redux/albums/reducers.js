import types from '../types/index';

// const initialState = {
//   albums: [],
//   // album: {},
//   count: 0,
//   data: {},
// };

const albumsReducer = (state = { albums: [], album: {}, count: 0, data: {} }, action) => {
  if (action.type === types.LOAD_ALBUMS) {
    state = {
      ...state,
      data: { ...state.data, [action.idx]: action.albums }, // action.index key is the page you're rendering
    };
  } else if (action.type === types.SET_COUNT) {
    state = { ...state, count: action.count };
  }
  // else if (action.type === types.EDIT_ALBUM) {
  //   const allAlbums = state.albums.map((album) =>
  //     album.id === action.album.id ? action.album : album
  //   );
  //   state = { ...state, albums: [...allAlbums]};
  // }
  // use method to reset state
  return state;
};

const singleAlbumReducer = (state = {}, action) => {
  if (action.type === types.SINGLE_ALBUM) {
    state = action.singleAlbum;
  }
  //  else if (action.type === types.EDIT_ALBUM) {
  //   const allAlbums = state.albums.map((album) =>
  //     album.id === action.album.id ? action.album : album
  //   );
  //   state = { ...state, albums: [...allAlbums]};
  // }
  return state;
};

const albumReducers = { albumsReducer, singleAlbumReducer };;

export default albumReducers;
