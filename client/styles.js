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
  transition: width 1s, height 1s, transform 1s;

  & a {
    text-decoration: none;
    color: #86c232;
  }

  :hover {
    width: 60%;
    border: solid 1px greenyellow;
    font-weight: bold;
    background-color: greenyellow;
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
const rotationAnimation = keyframes`
  from {rotate 0deg};
  to{rotate 360deg};
`;
export const Record = styled.div`
  animation: ${rotationAnimation} 4s infinite;
  animation-timing-function: linear;
  :hover {
    animation: ${neonGlow} 0.25s infinite;
  }
  & img {
    width: 60px;
    height: 60px;
  }
`;

export default { Title, Container, Box, Background, Record };
