import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  font-weight: bold;
  color: green;
  margin-top: 0;
`;

// use as a container to hold divs inside
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// use as boxes inside of the Container
export const Box = styled.div`
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

export default { Title, Container, Box };
