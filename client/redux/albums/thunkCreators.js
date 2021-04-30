import axios from 'axios';
import { loadAlbums } from './actionCreators';

export const renderAlbums = () => {
  return async (dispatch) => {
    try {
      const { data: albums } = await axios.get('/api/albums');
      dispatch(loadAlbums(albums));
    } catch (error) {
      console.log('Error rendering all albums in thunk creator: ', error);
    }
  };
};
