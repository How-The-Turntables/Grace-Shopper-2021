import types from '../types/index';

const initialState = {
  cart: {},
  pastOrders: [],
};

const cartReducer = (state = initialState, action) => {
  if (action.type === types.NEW_CART) {
    const cart = {
      id: action.id,
      userId: action.userId, // token?
      // need to add userId
    };
    state = { ...state, cart };
  } else if (action.type === types.LOAD_CART) {
    state = action.cart;
  } else if (action.type === types.ADD_TO_CART) {
    state = action.cart;
  } else if (action.type === types.REMOVE_FROM_CART) {
    const updatedOrderItems = state.cart.orderItems.filter(item => item.id !== action.id );
    state = {...state, cart: { orderItems: [...updatedOrderItems]}};
  }
  return state;
};

export default cartReducer;
