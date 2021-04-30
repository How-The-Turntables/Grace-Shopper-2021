import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderAlbums } from '../redux/albums/thunkCreators';
import { renderArtists } from '../redux/artists/artistThunkCreator';
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

class App extends Component {
  componentDidMount() {
    this.props.load();
  }
  render() {
    return (
      <div>
        <Route component={Nav} />
        <Route component={Home} path="/" exact />
        <Route component={LoginView} path="/login" />
        <Route component={SignUpForm} path="/register" />
        <Route component={AllAlbums} path="/albums" />
        <Route component={SingleArtist} path="/artists/:id" />
        <Route component={AllArtists} path="/artists" exact />
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
      dispatch(renderAlbums());
      dispatch(renderArtists());
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
