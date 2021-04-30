import axios from 'axios';
import { loadArtists } from './actionCreatorArtist';

export const renderArtists = () => {
  return async (dispatch) => {
    try {
      const artistsList = (await axios.get('/api/artists')).data;
      dispatch(loadArtists(artistsList));
    } catch (error) {
      console.log('Error rendering all artists in thunk creator: ', error);
    }
  };
};
