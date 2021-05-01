import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderSingleArtist } from '../redux/artists/artistThunkCreator';
import { Container, Box, Background, Title, DescriptionBox } from '../styles';

class SingleArtist extends Component {
  // not addind local state until we know if we will be adding edit, create or delete functionality
  componentDidMount() {
    const id = this.props.match.params.id;
    const { loadArtist } = this.props;
    loadArtist(id);
  }

  render() {
    const { artist } = this.props;
    const albums = artist.albums;
    return (
      <div>
        {artist.id ? (
          <Background>
            <Title>
              hello this is single artist view for artist id: {artist.id}
            </Title>
            <h3>Artist name: {artist.name}</h3>
            <h4>Description: {artist.description}</h4>
            <h4>Albums:</h4>
            <Container>
              {albums.map((album) => {
                return (
                  <Box key={album.id}>
                    {album.title}
                    <DescriptionBox>
                      <p>Description: </p>
                      {album.description}
                    </DescriptionBox>
                  </Box>
                );
              })}
            </Container>
          </Background>
        ) : (
          <Background>
            <h2>laoding...</h2>
          </Background>
        )}
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
