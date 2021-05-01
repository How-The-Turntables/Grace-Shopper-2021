import axios from 'axios';
import { loadCart } from './actionCreatorShopping';

export const renderCart = (id) => {
  return async (dispatch) => {
    try {
      const cartDetail = (await axios.get(`/api/orders/${id}`)).data;
      dispatch(loadCart(cartDetail));
    } catch (error) {
      console.log(error);
    }
  };
};
