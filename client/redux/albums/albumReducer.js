import types from '../types/index';

const albumsReducer = (
  state = {
    albums: [],
    album: {},
    count: 0,
    data: {},
    filteredAlbums: [],
    genre: '',
  },
  action
) => {
  if (action.type === types.LOAD_ALBUMS) {
    state = {
      ...state,
      data: {
        ...state.data,
        [action.idx]: action.albums,
        filteredAlbums: action.payload,
      }, // action.index key is the page you're rendering
    };
  } else if (action.type === types.SET_COUNT) {
    state = { ...state, count: action.count };
  } else if (action.type === types.FILTER_BY_GENRE) {
    state = {
      ...state,
      filteredAlbums: action.payload,
      genre: action.payload.genre,
    };
  }
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

const albumReducers = { albumsReducer, singleAlbumReducer };

export default albumReducers;
