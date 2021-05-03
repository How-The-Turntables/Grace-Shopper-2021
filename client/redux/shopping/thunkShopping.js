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
      const guestCart = JSON.parse(localStorage.getItem('GScart'));
      console.log('guest cart is ', guestCart);
      console.log('user cart is ', cart);
      // we got the guest cart.id
      const { data: guestCartCall } = await axios.get(
        `/api/${guestCart.id}/items`
      );
      //need to write a backend route for getting just order_items
      console.log('guestCartCall is: ', guestCartCall);
      // check for user cart in progress
      // check for order_items with guest cart id
      // map through and change their order_detail id to user cart's id
      // destroy guest cart
      // pull order_items with user cart.id
      // send user cart and order_items
      // profit

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
