import types from '../types/index';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  if (action.type === types.LOAD_CART) {
    state = action.cart;
  }
  return state;
};

export default cartReducer;
