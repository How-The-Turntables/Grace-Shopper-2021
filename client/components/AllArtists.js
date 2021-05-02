import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { renderArtists } from '../redux/artists/artistThunkCreator';


class AllArtists extends Component {
  componentDidMount() {
    this.props.loadArtists();
  }
  render() {
    const { artists } = this.props;
    return (
      <div>
        <h1>AllArtists Component</h1>
        <div>
          {!artists.length
            ? `Sorry, we're out of stock. Check back next week!`
            : artists.map((artist) => {
                return (
                  <div key={artist.id}>
                    <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    artists: state.artists,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadArtists: () => dispatch(renderArtists())
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( AllArtists );
