import axios from 'axios';
import { loadCart, newCart } from './actionCreatorShopping';

export const createCart = (id) => {
  return async (dispatch) => {
    try {
      const { data: newCart } = await axios.post(`/api/orders/${id}/cart`);
      dispatch(newCart(newCart));
    } catch (error) {
      console.log(error);
    }
  };
};

export const renderCart = (id) => {
  return async (dispatch) => {
    try {
      const { data: cart } = await axios.get(`/api/orders/${id}/cart`);
      dispatch(newCart(cart));
    } catch (error) {
      console.log(error);
    }
  };
};

export const cartChecker = (token) => {
  return async (dispatch) => {
    try {
      const { id } = token;
      const { data: cart } = await axios.get(`/api/orders/${id}/cart`, {
        headers: {
          authorization: token,
        },
      });
      const oldCart = localStorage.getItem('GScart');
      console.log(cart);
      if (cart) {
        localStorage.setItem('GScart', cart);
        dispatch(loadCart(cart));
      }
    } catch (error) {
      console.log('error occured in cartChecker thunk', error);
    }
  };
};

export const guestCart = () => {
  return async (dispatch) => {
    try {
      const { data: cart } = await axios.post('/api/orders/cart');
      localStorage.setItem('GScart', cart);
      dispatch(loadCart(cart));
    } catch (error) {
      console.log('error occured in guestCart thunk', error);
    }
  };
};
