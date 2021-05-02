import types from '../types/index';

export const newCart = (cart) => {
  return {
    type: types.NEW_CART,
    cart
  }
};

export const loadCart = (cart) => {
  return {
    type: types.LOAD_CART,
    cart,
  };
};

