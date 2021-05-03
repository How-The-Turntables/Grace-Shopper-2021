import types from '../types/index';

export const loadAlbums = ({ idx, albums }) => {
  return {
    type: types.LOAD_ALBUMS,
    albums,
    idx,
  };
};

export const setCount = (count) => {
  return {
    type: types.SET_COUNT,
    count,
  };
};

export const loadSingleAlbum = (album) => {
  return {
    type: types.SINGLE_ALBUM,
    album,
  };
};

// FILTERING
export const filterGenreAlbums = (genre, albums) => {
  return {
    type: types.FILTER_BY_GENRE,
    payload: {
      genre,
      // if no genre filter has been selected, return all albums, otherwise return all albums with the selected genre
      items: genre === ''? albums : albums.filter( album => album.genre === genre)
    }
  };
};


export const editAlbum = (album) => {
  return {
    type: types.EDIT_ALBUM,
    album,
  };
};

export const sortAlbums = (sortType) => {
  return {
    type: types.SORT_BY,
    sortType,
  };
};

