import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// import { createCart } from '../redux/shopping/thunkShopping'; // what about if a user is returning to the site?

import {
  Nav,
  Home,
  LoginView,
  AllAlbums,
  SingleAlbum,
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
        <Router>
          <Nav/>
          <Switch>
            {/* <Route component={Nav} /> */}
            <Route component={Home} path="/" exact />

            <Route component={SingleAlbum} path="/albums/:id/details" exact />
            <Route component={AllAlbums} path="/albums/:idx" exact />
            <Route component={LoginView} path="/login" />
            <Route component={LoginForm} path="/loginform" />
            <Route component={SignUpForm} path="/register" />

            <Route component={SingleArtist} path="/artists/:id" />
            <Route component={AllArtists} path="/artists" exact />
            <Route component={CartView} path="/cart" />
            <Route component={Checkout} path="/checkout" />
            {/* <Route component={Footer} /> */}
          </Switch>
          <Footer/>
        </Router>
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
