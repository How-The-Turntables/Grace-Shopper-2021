import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Nav, Home, AllAlbums, AllArtists } from './index';

class App extends Component {
  render() {
    return (
      <div>
        <Route component={Nav} />
        <Route component={Home} path='/' exact/>
        <Route component={AllAlbums} path='/albums'/>
        <Route component={AllArtists} path='/artists'/>
      </div>
    );
  }
}

export default App;
