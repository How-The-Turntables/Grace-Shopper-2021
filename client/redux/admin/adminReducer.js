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

const singleUserReducer = (state = {}, action) => {
  if (action.type === types.LOGIN || action.type === types.LOAD_USER) {
    const { user, token, admin } = action;
    state = { ...state, token, user, admin };
  }
  return state;
};

const editUserReducer = (state = { users: [] }, action ) => {
  if(action.type === types.EDIT_USER) {
    const userList = state.users.map(user =>
      user.id === action.user.id ? action.user : user );
    state = {...state, users: [...userList]};
    // state = { ...state, user: action.user }
  }
  return state;
};

const adminReducers = {
  ordersReducer,
  usersReducer,
  singleUserReducer,
  editUserReducer
};

export default adminReducers;
