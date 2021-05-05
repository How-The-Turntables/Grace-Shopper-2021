import axios from 'axios';
import types from '../types/index';

// CREATING A NEW CART
export const newCart = (cart) => {
  return {
    type: types.NEW_CART,
    cart,
  };
};

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

// LOADING CART ACTION
export const loadCart = (cart) => {
  return {
    type: types.LOAD_CART,
    cart,
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

export const cartChecker = (token, userId) => {
  return async (dispatch) => {
    try {
      const { data: cart } = await axios.get(`/api/orders/${userId}/cart`, {
        headers: {
          authorization: token,
        },
      });
      console.log('cart in thunk', cart);
      const guestCart = JSON.parse(localStorage.getItem('GuestCart'));
      if (guestCart.albums.length > 0) {
        guestCart.albums.map(async (album) => {
          const data = {
            albumId: album.id,
            order_deatil: cart.cart.id,
          };
          const { data: albumToAdd } = await axios.post('/api/items/', data);
        });
        localStorage.removeItem('GuestCart');
        const { data: updatedCartItems } = await axios.get(
          `/api/orders/${userId}/cart`,
          {
            headers: {
              authorization: token,
            },
          }
        );
        localStorage.setItem('UserCart', JSON.stringify(updatedCartItems));
        dispatch(loadCart(updatedCartItems));
      } else {
        localStorage.removeItem('GuestCart');
        localStorage.setItem('UserCart', JSON.stringify(cart));
        dispatch(loadCart(cart));
      }
    } catch (error) {
      console.log('error occured in cartChecker thunk', error);
    }
  };
};

// export const guestCart = () => {
//   return async (dispatch) => {
//     try {
//       const cart = {
//         id: 'guest',
//         albums: [],
//       };
//       // const { data: cart } = await axios.post('/api/orders/cart');
//       localStorage.setItem('GScart', JSON.stringify(cart));
//       dispatch(loadCart(cart));
//     } catch (error) {
//       console.log('error occured in guestCart thunk', error);
//     }
//   };
// };
