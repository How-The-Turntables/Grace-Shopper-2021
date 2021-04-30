import axios from 'axios';
import {
  loadArtists,
  loadSingleArtist,
  createArtist,
} from './artistActionCreator';

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

export const createArtist = (name, description, history) => {
  return async (dispatch) => {
    try {
      const newArtist = (
        await axios.post('/api/artists', { name, description })
      ).data;
      history.push(`/artists/${newArtist.id}`);
      dispatch(createArtist(newArtist));
    } catch (error) {
      console.log('Error creating single artist in thunk creator: ', error);
    }
  };
};
