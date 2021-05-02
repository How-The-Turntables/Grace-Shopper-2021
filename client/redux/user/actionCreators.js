import types from '../types';

export const loginAction = (credentials) => {
  return {
    type: types.LOGIN,
    credentials,
  };
};
