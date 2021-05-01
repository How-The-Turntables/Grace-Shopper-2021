import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderSingleArtist } from '../redux/artists/artistThunkCreator';

class SingleArtist extends Component {
  // not addind local state until we know if we will be adding edit, create or delete functionality
  componentDidMount() {
    const id = this.props.match.params.id;
    const { loadArtist } = this.props;
    loadArtist(id);
  }

  render() {
    const { artist } = this.props;
    return (
      <div>
        <h1>hello this is single artist view for artist id: {artist.id}</h1>
        <h3>Artist name: {artist.name}</h3>
        <h4>Description: {artist.description}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artist: state.singleArtist,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    loadArtist: (id) => dispatch(renderSingleArtist(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleArtist);
