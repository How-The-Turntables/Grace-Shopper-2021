import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderArtists } from '../redux/artists/artistThunkCreator';
import {
  Nav,
  Home,
  LoginView,
  AllAlbums,
  AllArtists,
  CartView,
  Checkout,
  Footer,
  SignUpForm,
} from './index';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Route component={Nav} />
        <Route component={Home} path="/" exact />
        <Route component={LoginView} path="/login" />
        <Route component={SignUpForm} path="/register" />
        <Route component={AllAlbums} path="/albums" />
        <Route component={AllArtists} path="/artists" />
        <Route component={CartView} path="/cart" />
        <Route component={Checkout} path="/checkout" />
        <Route component={Footer} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      dispatch(renderArtists());
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
