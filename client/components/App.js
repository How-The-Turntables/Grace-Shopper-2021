import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderAlbums } from '../redux/albums/thunkCreators';
import {
  Nav,
  Home,
  LoginView,
  AllAlbums,
  AllArtists,
  CartView,
  Checkout,
  Footer,
  SignUpForm
} from './index';

class App extends Component {
  componentDidMount() {
    this.props.load();
  }
  render() {
    return (
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
        <Route component={Nav} />
        <Route component={Home} path="/" exact />
        <Route component={LoginView} path="/login" />
        <Route component={AllAlbums} path="/albums" />
        <Route component={AllArtists} path="/artists" />
        <Route component={CartView} path="/cart" />
        <Route component={Checkout} path="/checkout" />
        <Route component={Footer} />
=======
=======

>>>>>>> e85b7cdc6cfbd2849285f6ea2c1012d74b0db127
        <Route component={ Nav } />
        <Route component={ Home } path="/" exact />
        <Route component={ LoginView } path="/login" />
        <Route component={ SignUpForm } path="/register" />
        <Route component={ AllAlbums } path="/albums" />
        <Route component={ AllArtists } path="/artists" />
        <Route component={ CartView } path="/cart" />
        <Route component={ Checkout } path="/checkout" />
        <Route component={ Footer } />
<<<<<<< HEAD
>>>>>>> 1d9d96bcc7cf4eead5a6d675d5529a537bb2c51b
=======

>>>>>>> e85b7cdc6cfbd2849285f6ea2c1012d74b0db127
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      dispatch(renderAlbums());
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
