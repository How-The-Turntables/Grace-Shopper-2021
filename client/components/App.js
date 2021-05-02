import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderArtists } from '../redux/artists/artistThunkCreator';
import { renderAlbums } from '../redux/albums/thunkCreators';
import { createCart, cartChecker } from '../redux/shopping/thunkShopping'; // what about if a user is returning to the site?

import {
  Nav,
  Home,
  LoginView,
  AllAlbums,
  AllArtists,
  SingleArtist,
  CartView,
  Checkout,
  Footer,
  SignUpForm,
} from './index';
import LoginForm from './LoginForm';

class App extends Component {
  componentDidMount(props) {
    // const { cart } = this.props.state; //from redux store
    // is there anything in the cart?
    // if (cart.length === 0) {
    // if user loged in && order_details.id ==> use this order_details.id
    // if guest ==> check if order_detail.id exists
    // if odre_details exist use it if not create it
    // }
    // this.props.newCart();
  }

  componentDidUpdate(props) {
    const cart = window.localStorage.GScart;
    const { id } = window.localStorage.JWTtoken;
    if (!cart) {
      // we want to create it using thunk
      props.mountCart(id);
    }
  }
  render() {
    return (
      <div>
        <Route component={Nav} />
        <Route component={Home} path="/" exact />

        <Route component={AllAlbums} path="/albums/:idx" />
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

const mapDispatchToProps = (dispatch) => {
  return {
    // newCart: (id) => dispatch(createCart(id)), // need this to have userId token
    mountCart: (id) => dispatch(cartChecker(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
