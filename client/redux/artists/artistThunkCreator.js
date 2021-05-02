import axios from 'axios';
import {
  loadArtists,
  loadSingleArtist,
  createArtist,
  editArtist,
  deleteArtist,
} from './artistActionCreator';

export const renderArtists = () => {
  return async (dispatch) => {
    try {
      const { data: artistsList } = await axios.get('/api/artists');
      dispatch(loadArtists(artistsList));
    } catch (error) {
      console.log('Error rendering all artists in thunk creator: ', error);
    }
  };
};

export const renderSingleArtist = (id) => {
  return async (dispatch) => {
    try {
      const { data: singleArtist } = await axios.get(`/api/artists/${id}`);
      dispatch(loadSingleArtist(singleArtist));
    } catch (error) {
      console.log('Error rendering single artist in thunk creator: ', error);
    }
  };
};

// extra functionality in case we need it

// export const createArtist1 = (name, description, history) => {
//   return async (dispatch) => {
//     try {
//       const newArtist = (
//         await axios.post('/api/artists', { name, description })
//       ).data;
//       history.push(`/artists/${newArtist.id}`);
//       dispatch(createArtist(newArtist));
//     } catch (error) {
//       console.log('Error creating single artist in thunk creator: ', error);
//     }
//   };
// };

// export const editArtist1 = (name, description, id, history) => {
//   return async (dispatch) => {
//     try {
//       const artist = (
//         await axios.put(`/api/artist/${id}`, { name, description, id })
//       ).data;
//       dispatch(editArtist(artist));
//       history.push(`/artists/${id}`);
//     } catch (error) {
//       console.log('Error updating single artist in thunk creator: ', error);
//     }
//   };
// };

// export const deleteArtist1 = (id, history) => {
//   return async (dispatch) => {
//     try {
//       const artist = (await axios.delete(`api/artists/${id}`)).data;
//       dispatch(deleteArtist(artist));
//       history.push('/artists');
//     } catch (error) {
//       console.log('Error deleting single artist in thunk creator: ', error);
//     }
//   };
// };
