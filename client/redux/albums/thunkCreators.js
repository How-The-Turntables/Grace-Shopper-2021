import axios from 'axios';
import { loadAlbums, setCount, filterGenreAlbums } from './actionCreators';


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


// FROM TUTORIAL
export const filterTutorial = (albums, genre) => {
  return  (dispatch) => {
    dispatch(filterGenreAlbums(albums, genre))
  };
};
