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
      const { data: orderList } = await axios.get(`/api/orders/${id}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch(loadUserOrders(orderList));
    } catch (error) {
      console.log('ERROR OCCURRING IN USER ACTIONS -- RENDER ORDERS: ', error);
    }
  };
};

const loadUser = (user) => {
  return {
    type: types.LOAD_USER,
    user
  }
};

export const renderSelectedUser = (id) => {
  return async(dispatch) => {
    try {
      const token = window.localStorage.getItem('JWTtoken');
      const { data: user } = await axios.get(`/api/users/${id}`, {
        headers: {
          authorization: token,
        },
      });
      console.log('LOADED USER THUNK ', user)
      dispatch(loadUser(user));
      console.log('THUNK DISPATCHED')
    } catch (error) {
      console.log('ERROR OCCURRING IN USER ACTIONS -- RENDER SINGLE USER: ', error);
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
      console.log(token
        )
      const { data: userToEdit } = await axios.put(`/api/users/${id}`, body, {
          headers: {
            authorization: token,
          },
      });
      console.log('THUNK USER', userToEdit)
      dispatch(editUser( userToEdit ));
      // history.push(`/users/${id}`);
      history.push('/');

    }
    catch (error) {
      console.log('Error editing USER in thunk creator: ', error);
    }
  }
};
// const loadUsers = (users) => {
//   return {
//     type: types.LOAD_USERS,
//     users
//   }
// };

// export const renderUsers = () => {
//   return async(dispatch) => {
//     try {
//       const token = window.localStorage.getItem('JWTtoken');
//       const { data: userList } = await axios.get('/api/users/admin', {
//         headers: {
//           authorization: token,
//         },
//       });
//       dispatch(loadUsers(userList));
//     } catch (error) {
//       console.log('ERROR OCCURRING IN ADMIN ACTIONS -- RENDER USERS: ', error);
//     }
//   };
// };
