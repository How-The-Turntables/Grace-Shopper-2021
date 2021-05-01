import axios from 'axios';
import loginAction from './actionCreators';

// generates token and calls attemptTokeLogin
export const loginUser = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/auth', credentials);
      console.log('response.data', response.data);
      const { token } = response.data;
      window.localStorage.setItem('JWTtoken', token);
      dispatch(attemptTokenLogin());
    } catch (error) {
      console.log('error occured in loginUser thunk', error);
    }
  };
};

export const attemptTokenLogin = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem('JWTtoken');
    if (token) {
      const response = await axios.get('/api/auth', {
        headers: {
          authorization: token,
        },
      });
      console.log(response.data);

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
