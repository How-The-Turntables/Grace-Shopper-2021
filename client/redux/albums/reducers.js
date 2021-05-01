import types from '../types/index';

const initialState = {
  // albums: {
  //   products: [],
  //   method: '', //{field } could pass in an action creator that changes the method
  // }, // all data make it an object add key 'method' and when it maps over these things it'll map over some kind of enum or switch case
  albums: [],
  album: {},
  count: 0, // how many albums we want to see on the page
  data: {},
};
// sortBy: ''

export const albumReducer = (state = initialState, action) => {
  if (action.type === types.LOAD_ALBUMS) {
    // console.log('*******', action.albums);
    state = {
      ...state,
      data: { ...state.data, [action.index]: action.albums }, // action.index key is the page you're rendering
    };
  } else if (action.type === types.SET_COUNT) {
    state = { ...state, count: action.count };
  } else if (action.type === types.SINGLE_ALBUM) {
    state = action.album;
  } else if (action.type === types.EDIT_ALBUM) {
    const allAlbums = state.albums.map((album) =>
      album.id === action.album.id ? action.album : album
    );
    state = { ...state, albums: [...allAlbums] };
  }
  // use method to reset state
  return state;
};
