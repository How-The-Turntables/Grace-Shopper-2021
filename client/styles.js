import styled, { keyframes } from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  color: white;
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

//neon glow effect for the Box

const neonGlow = keyframes`
  0% {
    box-shadow: none;
  }
  50% {    
    box-shadow: 8px 8px 10px greenyellow;
  }
  100% {
    box-shadow: none;
  }
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
  animation: ${neonGlow} 3s infinite;

  transition-property: width;
  transition: width 0.5s, height 0.5s, transform 0.5s;

  & a {
    text-decoration: none;
    color: #86c232;
  }

  :hover {
    width: 60%;
    border: solid 4px green;
    font-weight: bold;
    background-color: greenyellow;
    transform: rotate(360deg);
    box-shadow: none;
  }

  :hover a {
    color: black;
  }
`;

// use for the background

export const Background = styled.div`
  background-color: #222629;
`;

export default { Title, Container, Box, Background };
