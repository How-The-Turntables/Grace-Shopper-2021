import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCart, cartChecker } from '../redux/shopping/thunkShopping'; // what about if a user is returning to the site?
import { attemptTokenLogin } from '../redux/user/userActions';
import {
  Nav,
  Home,
  AdminPage,
  AllUsers,
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
import { newGuestCart } from '../../server/utils';

class App extends Component {
  componentDidMount() {
    const token = window.localStorage.JWTtoken;
    if (token) {
      this.props.attemptTokenLogin();
    } else {
      newGuestCart();
    }
  }

  componentDidUpdate(prevState) {
    const cart = window.localStorage.GScart;
    const token = window.localStorage.JWTtoken;
    if (token) {
      if (prevState.cart === this.props.cart) {
        this.props.cartChecker(token);
        //could this could cause an infinite loop***
      }
    }
  }
  render() {
    return (
      <div>
        <Router>
          <Route component={Nav} />
          <Switch>
            <Route component={Home} path="/" exact />

            <Route component={SingleAlbum} path="/albums/:id/details" exact />
            <Route component={AllAlbums} path="/albums/:idx" exact />

            <Route component={LoginView} path="/login" />
            <Route component={LoginForm} path="/loginform" />
            <Route component={SignUpForm} path="/register" />

            <Route component={AdminPage} path="/admin" />
            <Route component={AllUsers} path="/orders/admin" />
            <Route component={AllOrders} path="/orders/admin" />

            <Route component={SingleArtist} path="/artists/:id" />
            <Route component={AllArtists} path="/artists" exact />
            <Route component={CartView} path="/cart" />
            <Route component={Checkout} path="/checkout" />
          </Switch>
          <Route component={Footer} />
        </Router>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
