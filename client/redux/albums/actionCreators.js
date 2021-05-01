import types from '../types/index';

export const loadAlbums = ({ index, albums }) => {
  return {
    type: types.LOAD_ALBUMS,
    albums,
    index,
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

export const editAlbum = (album) => {
  return {
    type: types.EDIT_ALBUM,
    album,
  };
};

export const loadNextPage = (payload) => {
  return {
    type: types.LOAD_NEXT_PAGE,
    payload,
  };
};

export const LOAD_EXACT_PAGE = (payload) => {
  return {
    type: types.LOAD_NEXT_PAGE,
    payload,
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
