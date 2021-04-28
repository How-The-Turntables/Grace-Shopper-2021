import React from 'react';
import { Title, Container, Box } from '../styles';
// import { connect } from 'react-redux'

//add styled code here to test if it works. If all goes well then ill move it to its separate file

const Home = () => {
  return (
    <div>
      <Title>How The Turntables | Bootleg Records For Your Ear Holes</Title>
      <Container>
        <Box>Browse by Albums</Box>
        <Box>Browse by Artists</Box>
      </Container>
    </div>
  );
};

export default Home;
