import types from '../types/index';
import axios from 'axios';
import { renderSingleAlbum } from '../albums/albumActions';

export const addReview = ( review ) => {
  return {
    type: types.ADD_REVIEW,
    review
  }
};

export const renderAddReview = ( newReview, id, history ) => {
  return async (dispatch) => {
    try {
      const { data: review } = await axios.post(`api/albums/${id}/reviews`, newReview );
      dispatch(addReview( review ));
      history.push('/'); // or should this just be '/'
      console.log('left review')
      // dispatch(renderReviews(id));
      console.log('rendering album')
      dispatch(renderSingleAlbum( id ));
    }
    catch (error) {
      console.log('Error adding new review in thunk creator: ', error);
    }
  }
};



