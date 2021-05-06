import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCart, cartChecker } from '../redux/shopping/shoppingActions'; // what about if a user is returning to the site?
// import StripeCheckout from 'react-stripe-checkout';
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
  UserOrders,
  UserAccount,
  AdminOrders,
  AdminUsers,
  PromoteUser
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
    // const cart = window.localStorage.GScart;
    const token = window.localStorage.JWTtoken;
    const userId = this.props.auth.user.id;
    if (token) {
      if (!window.localStorage.UserCart) {
        this.props.cartChecker(token, userId);
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
            <Route component={SingleArtist} path="/artists/:id" />
            <Route component={AllArtists} path="/artists" exact />
            <Route component={CartView} path="/cart" />
            <Route component={Checkout} path="/checkout" />

            <Route component={UserOrders} path="/orders/:id" />
            <Route component={UserAccount} path="/account/:id" />

            <Route component={AdminUsers} path="/admin/users" exact/>
            <Route component={PromoteUser} path="/admin/users/:id" />
            <Route component={AdminOrders} path="/admin" exact/>


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
    cartChecker: (token, userId) => dispatch(cartChecker(token, userId)),
    attemptTokenLogin: () => dispatch(attemptTokenLogin(history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
