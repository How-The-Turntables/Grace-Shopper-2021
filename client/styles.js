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
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
`;

// use as boxes inside of the Container
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 15rem;
  border: solid 1px black;
  border-radius: 3rem;
  margin: 3rem;
  transition-property: width;
  transition-duration: 1s;

  :hover {
    width: 60%;
    border: solid 4px green;
    font-weight: bold;
    color: black;
    background-color: greenyellow;
  }
`;

export default { Title, Container, Box };
