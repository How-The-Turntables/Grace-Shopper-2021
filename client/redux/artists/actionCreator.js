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
