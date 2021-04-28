import React from 'react';
import { Title, Container, Box } from '../styles'; //these are styled containers from /client/styles.js
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux'

const Home = () => {
  return (
    <div>
      <Title>How The Turntables | Bootleg Records For Your Ear Holes</Title>
      <Container>
        <Link to="/albums">
          <Box>Browse by Albums</Box>
        </Link>
        <Link to="/artists">
          <Box>Browse by Artists</Box>
        </Link>
      </Container>
    </div>
  );
};

export default Home;
