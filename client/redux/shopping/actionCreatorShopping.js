import types from '../types/index';

export const loadCart = (cart) => {
  return {
    type: types.LOAD_CART,
    cart,
  };
};
