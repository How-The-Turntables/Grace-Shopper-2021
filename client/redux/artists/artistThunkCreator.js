import axios from 'axios';
import { loadArtists, loadSingleArtist } from './actionCreatorArtist';

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

export const renderSingleArtist = (id) => {
  return async (dispatch) => {
    try {
      const singleArtist = (await axios.get(`/api/artists/${id}`)).data;
      dispatch(loadSingleArtist(singleArtist));
    } catch (error) {
      console.log('Error rendering single artist in thunk creator: ', error);
    }
  };
};
