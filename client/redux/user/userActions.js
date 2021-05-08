import axios from 'axios';
import types from '../types';

export const loginAction = ({ user, token, admin }) => {
  return {
    type: types.LOGIN,
    user,
    token,
    admin,
  };
};

// generates token and calls attemptTokeLogin
export const loginUser = (credentials, history) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/auth', credentials);
      const { token } = response.data;
      window.localStorage.setItem('JWTtoken', token);
      dispatch(attemptTokenLogin(history));
    } catch (error) {

    }
  };
};

export const attemptTokenLogin = (history) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem('JWTtoken');
    if (token) {
      const response = await axios.get('/api/auth', {
        headers: {
          authorization: token,
        },
      });
      const { id, firstName, lastName, email, admin } = response.data;
      const user = { id, firstName, lastName, email };
      dispatch(loginAction({ user, token, admin }));

      history.push('/');

      //send order history only, yes!

      // const { id } = response.data;
      // const { data: notes } = await axios.get(`/api/users/${id}/notes`, {
      //   headers: {
      //     authorization: token,
      //   },
      // });
      // this.setState({ auth: response.data, notes: notes });
    }
  };
};

const loadUserOrders = (userOrders) => {
  return {
    type: types.LOAD_USER_ORDERS,
    userOrders
  }
};

export const renderUserOrders = (id) => {
  return async(dispatch) => {
    try {
      const token = window.localStorage.getItem('JWTtoken');
      console.log('TOKEN', token)
      const { data: orderList } = await axios.get(`/api/orders/${id}`, {
        headers: {
          authorization: token,
        },
      });
      console.log('ORDER LIST ', orderList)
      dispatch(loadUserOrders(orderList));
    } catch (error) {
      console.log('ERROR OCCURRING IN USER ACTIONS -- RENDER ORDERS: ', error);
    }
  };
};

const editUser = ( user ) => {
  return {
    type: types.EDIT_USER,
    user
  }
};

export const renderEditUser = ( id, body, history ) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('JWTtoken');
      const { data: userToEdit } = await axios.put(`/api/users/${id}`, body, {
          headers: {
            authorization: token,
          },
      });
      dispatch(editUser( userToEdit ));
      // history.push(`/account/${id}`);
    }
    catch (error) {
      console.log('Error editing USER in thunk creator: ', error);
    }
  }
};
