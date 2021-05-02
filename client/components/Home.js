import React from 'react';
import { Title, Container, Box, Background, Record } from '../styles'; //these are styled containers from /client/styles.js
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux'

// IDEA: should we keep index in state, and use that for the browse by albums link? that way it keeps your place...? is that stored in count on the state?

const Home = () => {
  return (
    <Background>
      <Title>How The Turntables | Bootleg Records For Your Ear Holes</Title>
      <Container>
        <Box>
          <Link to="/albums/0">Browse by Albums</Link>
        </Box>
        <Box>
          <Link to="/artists">Browse by Artists</Link>
        </Box>
        <Record>
          <img src="/public/img/defaultAlbum.png" />
        </Record>
      </Container>
    </Background>
  );
};

export default Home;
