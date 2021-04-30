import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Nav, Home, AllAlbums, AllArtists } from './index';
import { renderAlbums } from '../redux/albums/thunkCreators';

class App extends Component {
  componentDidMount() {
    this.props.load();
  }
  render() {
    return (
      <div>
        <Route component={Nav} />
        <Route component={Home} path="/" exact />
        <Route component={AllAlbums} path="/albums" />
        <Route component={AllArtists} path="/artists" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      dispatch(renderAlbums());
      console.log('hello? are you there?');
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
