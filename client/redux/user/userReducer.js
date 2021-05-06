import types from '../types';

const initialState = {
  user: {},
  token: null,
  admin: false
};

const userReducer = (state = initialState, action) => {
  if (action.type === types.LOGIN || action.type === types.LOAD_USER) {
    const { user, token, admin } = action;
    state = { ...state, token, user, admin };
  }
  return state;
};


const userOrdersReducer = (state = [], action) => {
  if(action.type === types.LOAD_USER_ORDERS) {
    state = action.userOrders;
  }
  return state;
};

export const editUserReducer = (state = { users: [] }, action ) => {
  if(action.type === types.EDIT_USER) {
    // const userList = state.users.map(user =>
    //   user.id === action.user.id ? action.user : user );
    // state = {...state, users: [...userList]};
    state = { ...state, user: action.user }
  }
  return state;
};

const userReducers = {
  userReducer,
  userOrdersReducer,
  editUserReducer
};

export default userReducers;
