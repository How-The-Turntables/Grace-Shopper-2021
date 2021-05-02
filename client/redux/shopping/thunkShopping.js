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

export const cartChecker = (id) => {
  return async (dispatch) => {
    const order = await OrderDetail.findOne({
      where: {
        userId: id,
        status: 'IN PROGRESS',
      },
    });
    console.log(order);
    if (order) {
      window.localStorage.setItem('GSorder', order);
    } else {
      const order = await OrderDetail.create({
        status: 'IN PROGRESS',
        userId: id,
      });
      window.localStorage.setItem('GSorder', order);
    }
  };
};
