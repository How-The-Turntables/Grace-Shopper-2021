import types from '../types/index';
import albumReducers from '../albums/albumReducer';

export const albumReviews = (state = [], action) => {
  if(action.type === types.LOAD_REVIEWS){
    state = action.reviews;
  }
  return state;
};

export const addReview = (state = {}, action) => {
  if(action.type === types.ADD_REVIEW) {
    const review = {
      comment: action.comment,
      stars: action.stars,
      albumId: action.albumId,
    }
    state = {...state, reviews: { ...state.reviews, review }};
  }
  return state;
};

const albumReducer = { albumReviews, addReview };

export default albumReducer;
