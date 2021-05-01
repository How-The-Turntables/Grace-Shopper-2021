import axios from 'axios';
import { loadAlbums, setCount } from './actionCreators';

export const renderAlbums = (index) => {
  return async (dispatch, getState) => {
    try {
      // passing getState allows for check to see if you're already displaying data
      const albums = getState().albums.data[index];
      if (albums) {
        dispatch(loadAlbums({ index, albums }));
      } else {
        const {
          data: { albums, count },
        } = await axios.get('/api/albums');
        dispatch(loadAlbums({ albums, count }));
        dispatch(setCount(count));
      }
    } catch (error) {
      console.log('Error rendering all albums in thunk creator: ', error);
    }
  };
};
