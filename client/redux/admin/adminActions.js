import axios from 'axios';
import types from '../types/index';

export const loadOrders = (orders) => {
  return {
    type: types.LOAD_ORDERS,
    orders,
  };
};

export const renderOrders = () => {
  return async(dispatch) => {
    try {
      const { data: ordersList } = await axios.get('/api/orders/admin');
        dispatch(loadOrders(ordersList));
    } catch (error) {
      console.log('ERROR OCCURRING IN ADMIN ACTIONS -- RENDER ORDERS: ', error);
    }
  };
};
