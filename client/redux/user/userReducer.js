import types from '../types';

const initialState = {
  user: {},
  token: null,
  admin: false
};

const userReducer = (state = initialState, action) => {
  if (action.type === types.LOGIN) {
    const { user, token, admin } = action;
    state = { ...state, token, user, admin };
  }
  return state;
};


export default userReducer;
