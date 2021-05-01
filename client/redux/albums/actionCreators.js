import types from '../types/index';

export const loadAlbums = (albums) => {
  return {
    type: types.LOAD_ALBUMS,
    albums,
  };
};

export const loadSingleAlbum = (album) => {
  return {
    type: types.SINGLE_ALBUM,
    album,
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

export const filterAlbums = (filterType) => {
  return {
    type: types.SORT_BY,
    filterType,
  };
};
