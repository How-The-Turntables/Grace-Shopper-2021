import types from '../types/index';

export const loadArtists = (artists) => {
  return {
    type: types.LOAD_ARTISTS,
    artists,
  };
};

export const loadSingleArtist = (singleArtist) => {
  return {
    type: types.SINGLE_ARTIST,
    singleArtist,
  };
};

// extra functionality in case we need it

// export const createArtist = (newArtist) => {
//   return {
//     type: types.CREATE_ARTIST,
//     newArtist,
//   };
// };

// export const editArtist = (artist) => {
//   return {
//     type: types.EDIT_ARTIST,
//     artist,
//   };
// };

// export const deleteArtist = (id) => {
//   return {
//     type: types.DELETE_ARTIST,
//     id,
//   };
// };
