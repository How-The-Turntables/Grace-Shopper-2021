import React from 'react';
import styled from 'styled-components';
// import { connect } from 'react-redux'

//add styled code here to test if it works. If all goes well then ill move it to its separate file

const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  font-weight: bold;
  color: green;
  margin-top: 0;
`;

// use as a container to hold divs inside
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// use as boxes inside of the Container
const Box = styled.div`
  width: 40%;
  height: 20rem;
  border: solid 1px black;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem;

  :hover {
    width: 60%;
    border: solid 4px green;
    font-weight: bold;
    color: black;
    background-color: greenyellow;
  }
`;

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
