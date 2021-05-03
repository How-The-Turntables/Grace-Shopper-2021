import types from '../types/index';

const initialState = {
  orders: []
};

const ordersReducer = (state = initialState, action) => {
  if (action.type === types.LOAD_ORDERS) {
    state = action.orders;
  };
  return state;
}

const adminReducers = {
  ordersReducer
};

export default adminReducers;
