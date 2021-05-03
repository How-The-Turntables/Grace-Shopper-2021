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
      const guestCart = localStorage.getItem('GScart');
      console.log('guest cart is ', guestCart);
      console.log('user cart is ', cart);
      // need to get order_items fromguest car t and add them to the user cart

      // if gvuest wants to check out
      // chekout process will check the local storage

      // typeof array is an object
      // if only 1 product, will it be an array
      // !guestCart.length

      // if (typeof guestCart !== 'object') {
      //   // if guestCart type is an object => ignore it is empty
      //   // if it is an array => fetch all order_items for this order_detail
      //   guestCart.forEach((orderItem) => cart.push(orderItem));
      //   // add them all to the user cart
      //   // combine guestcart and cart somehow

      //   // when should the axios PUT be made?
      //   // after login?
      //   // after adding to cart

      //   localStorage.setItem('GScart', cart);
      //   dispatch(loadCart(cart));
      // }

      localStorage.setItem('GScart', JSON.stringify(cart));
      dispatch(loadCart(cart));
    } catch (error) {
      console.log('error occured in cartChecker thunk', error);
    }
  };
};

export const guestCart = () => {
  return async (dispatch) => {
    try {
      const { data: cart } = await axios.post('/api/orders/cart');
      localStorage.setItem('GScart', JSON.stringify(cart));
      dispatch(loadCart(cart));
    } catch (error) {
      console.log('error occured in guestCart thunk', error);
    }
  };
};
