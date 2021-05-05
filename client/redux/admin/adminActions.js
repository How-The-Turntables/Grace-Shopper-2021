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
      const token = window.localStorage.getItem('JWTtoken');
      const { data: ordersList } = await axios.get('/api/orders/admin', {
        headers: {
          authorization: token,
        },
      });
      dispatch(loadOrders(ordersList));
    } catch (error) {
      console.log('ERROR OCCURRING IN ADMIN ACTIONS -- RENDER ORDERS: ', error);
    }
  };
};


const loadUsers = (users) => {
  return {
    type: types.LOAD_USERS,
    users
  }
}
export const renderUsers = () => {
  return async(dispatch) => {
    try {
      const token = window.localStorage.getItem('JWTtoken');
      const { data: userList } = await axios.get('/api/users/admin', {
        headers: {
          authorization: token,
        },
      });
      dispatch(loadUsers(userList));
    } catch (error) {
      console.log('ERROR OCCURRING IN ADMIN ACTIONS -- RENDER USERS: ', error);
    }
  };
};
