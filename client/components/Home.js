import React from 'react';
import { Title, Container, Box } from '../styles'; //these are styled containers from /client/styles.js
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux'

const Home = () => {
  return (
    <div>
      <Title>How The Turntables | Bootleg Records For Your Ear Holes</Title>
      <Container>
        <Box>
          <Link to="/albums">Browse by Albums</Link>
        </Box>
        <Box>
          <Link to="/artists">Browse by Artists</Link>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
