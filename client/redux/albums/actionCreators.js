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

export const loadSingleAlbum = (singleAlbum) => {
  return {
    type: types.SINGLE_ALBUM,
    singleAlbum,
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
