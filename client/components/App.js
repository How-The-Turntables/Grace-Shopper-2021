import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderArtists } from '../redux/artists/artistThunkCreator';
import { renderAlbums } from '../redux/albums/thunkCreators';
import { createCart } from '../redux/shopping/thunkShopping'; // what about if a user is returning to the site?

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
  componentDidMount() {
    // this.props.newCart();
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
};

const mapDispatchToProps = (dispatch) => {
  return {
    newCart: (id) => dispatch(createCart(id)), // need this to have userId token
    // loadArtists: () => dispatch(renderArtists())

  };
};

export default connect(null, mapDispatchToProps)(App);
