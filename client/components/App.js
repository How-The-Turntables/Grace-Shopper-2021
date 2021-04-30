import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  Nav,
  Home,
  AllAlbums,
  AllArtists,
  CartView,
  Checkout,
  Footer,
} from './index';

class App extends Component {
  render() {
    return (
      <div>
        <Route component={Nav} />
        <Route component={Home} path="/" exact />
        <Route component={AllAlbums} path="/albums" />
        <Route component={AllArtists} path="/artists" />
        <Route component={CartView} path="/cart" />
        <Route component={Checkout} path="/checkout" />
        <Route component={Footer} />
      </div>
    );
  }
}

export default App;
