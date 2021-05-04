import axios from 'axios';
import types from '../types/index';


// ALL ALBUMS ACTIONS

const loadAlbums = ({ idx, albums }) => {
  return {
    type: types.LOAD_ALBUMS,
    albums,
    idx,
  };
};

const setCount = (count) => {
  return {
    type: types.SET_COUNT,
    count,
  };
};


export const renderAlbums = (idx) => {
  return async (dispatch, getState) => {
    try {
      // passing getState allows for check to see if you're already displaying data
      const albums = getState().albums.data[idx];
      if (albums) {
        dispatch(loadAlbums({ idx, albums }));
      } else {
        const {
          data: { albums, count },
        } = await axios.get(`/api/albums?idx=${idx}`);
        dispatch(loadAlbums({ albums, idx }));
        dispatch(setCount(count));
      }
    } catch (error) {
      console.log('Error rendering all albums in thunk creator: ', error);
    }
  };
};


// SINGLE ALBUM ACTIONS
const loadSingleAlbum = (singleAlbum) => {
  return {
    type: types.SINGLE_ALBUM,
    singleAlbum,
  };
};

export const renderSingleAlbum = (id) => {
  return async (dispatch) => {
    try {
      const { data: singleAlbum } = await axios.get(`/api/albums/${id}`);
      dispatch(loadSingleAlbum(singleAlbum));
    } catch (error) {
      console.log('Error rendering single album in thunk creator: ', error);
    }
  };
};


// FILTERING
const filterGenreAlbums = (genre, albums) => {
  return {
    type: types.FILTER_BY_GENRE,
    payload: {
      genre,
      // if no genre filter has been selected, return all albums, otherwise return all albums with the selected genre
      items: genre === ''? albums : albums.filter( album => album.genre === genre)
    }
  };
};

export const filterTutorial = (albums, genre) => {
  return  (dispatch) => {
    dispatch(filterGenreAlbums(albums, genre))
  };
};



// export const editAlbum = (album) => {
//   return {
//     type: types.EDIT_ALBUM,
//     album,
//   };
// };

