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
      console.log('ORDERS IN THUNK CALL ', ordersList)
      dispatch(loadOrders(ordersList));

    } catch (error) {
      console.log('ERROR OCCURRING IN ADMIN ACTIONS -- RENDER ORDERS: ', error);
    }
  };
};

// const getOrders = async () => {
//   console.log('get orders is running 1')
//   const token = window.localStorage.getItem('JWTtoken');
//   const orders = await axios.get('/api/orders/admin', {
//     headers: {
//       authorization: token,
//     },
//   });
//   console.log('after AXIOS, data received 2')
//   rows = orders.data
//   // return rows;
// };

// getOrders();
// console.log("GET ORDERS invoked 3", rows)
// console.log(rowss);

// const rows = []
