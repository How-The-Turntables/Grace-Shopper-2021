import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderArtists } from '../redux/artists/artistThunkCreator';
import { renderAlbums } from '../redux/albums/thunkCreators';
import {
  createCart,
  cartChecker,
  guestCart,
} from '../redux/shopping/thunkShopping'; // what about if a user is returning to the site?
import { attemptTokenLogin } from '../redux/user/userActions';

import {
  Nav,
  Home,
  LoginView,
  AllAlbums,
  AllArtists,
  SingleArtist,
  SingleAlbum,
  CartView,
  Checkout,
  Footer,
  SignUpForm,
  AllOrders,
} from './index';
import LoginForm from './LoginForm';

class App extends Component {
  componentDidMount() {
    const token = window.localStorage.JWTtoken;
    if (token) {
      this.props.attemptTokenLogin();
    } else {
      this.props.guestCart();
    }
  }

  componentDidUpdate(props) {
    const cart = window.localStorage.GScart;
    const token = window.localStorage.JWTtoken;
    // may need to remove
    if (token) {
      // start here tomorrow
      // check if theres a token
      // yes? => status in progress, merge items from current cart

      props.cartChecker(token);
    }
    if (!cart) {
      props.cartChecker(token);
      //this may go away
    }
  }
  render() {
    return (
      <div>
        <Route component={Nav} />
        <Route component={Home} path="/" exact />

        <Route component={AllOrders} path="/orders/admin" />
        <Route component={SingleAlbum} path="/albums/:id/details" exact />
        <Route component={AllAlbums} path="/albums/:idx" exact />

        <Route component={LoginView} path="/login" />
        <Route component={LoginForm} path="/loginform" />
        <Route component={SignUpForm} path="/register" />

        <Route component={SingleArtist} path="/artists/:id" />
        <Route component={AllArtists} path="/artists" exact />
        <Route component={CartView} path="/cart" />
        <Route component={Checkout} path="/checkout" />
        <Route component={Footer} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    newCart: (id) => dispatch(createCart(id)), // need this to have userId token
    cartChecker: (token) => dispatch(cartChecker(token)),
    attemptTokenLogin: () => dispatch(attemptTokenLogin(history)),
    guestCart: () => dispatch(guestCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
