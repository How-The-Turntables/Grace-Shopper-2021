import types from '../types/index';

const initialState = {
  cart: {},
  pastOrders: [],
};

const cartReducer = (state = initialState, action) => {
  if (action.type === types.NEW_CART) {
    const cart = {
      id: action.id,
      userId: action.userId // token?
      // need to add userId
    };
    state = { ...state, cart };
  }
  else if (action.type === types.LOAD_CART) {
    state = action.cart;
  }
  return state;
};

export default cartReducer;
