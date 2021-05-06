import types from '../types/index';

const initialState = {
  orders: [],
  users: []
};

const ordersReducer = (state = initialState, action) => {
  if (action.type === types.LOAD_ORDERS) {
    state = action.orders;
  };
  return state;
};

const usersReducer = (state = initialState, action) => {
  if (action.type === types.LOAD_USERS) {
    state = action.users;
  };
  return state;
};

const adminReducers = {
  ordersReducer,
  usersReducer
};

export default adminReducers;
