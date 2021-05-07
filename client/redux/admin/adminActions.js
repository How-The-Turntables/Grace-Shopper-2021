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
      console.log('TOKEN IN THUNKS ', token)
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

// LOAD ALL USERS
const loadUsers = (users) => {
  return {
    type: types.LOAD_USERS,
    users
  }
};

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

// LOAD SINGLE USER
const loadSingleUser = (selectedUser) => {
  return {
    type: types.LOAD_USER,
    selectedUser
  }
};

export const renderSelectedUser = (id) => {
  return async(dispatch) => {
    try {
      const { data: user } = await axios.get(`/api/users/${id}`);
      dispatch(loadSingleUser(user));
    } catch (error) {
      console.log('ERROR OCCURRING IN admin ACTIONS -- RENDER SINGLE USER: ', error);
    }
  };
};

// PROMOTE USER TO ADMIN
const promoteUser = (promoteUser) => {
  return {
    type: types.PROMOTE_USER,
    promoteUser
  }
};


export const renderPromoteUser = ( id, body, history ) => {
  return async (dispatch) => {
    try {
      const { data: userToEdit } = await axios.put(`/api/users/${id}/admin`, body);
      console.log(userToEdit)
      dispatch(promoteUser( userToEdit ));
      // history.push(`/users/${id}`);
    }
    catch (error) {
      console.log('Error promoting USER in admin thunk creator: ', error);
    }
  }
};
