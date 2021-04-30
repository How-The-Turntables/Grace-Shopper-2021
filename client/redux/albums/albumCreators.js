import types from './albumTypes';

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
