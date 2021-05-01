import axios from 'axios';
import loginAction from './actionCreators';

export const loginUser = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/auth', credentials);
      const { token } = response.data;
      window.localStorage.setItem('JWTtoken', token);
    } catch (error) {
      console.log('error occured in loginUser thunk');
    }
  };
};
