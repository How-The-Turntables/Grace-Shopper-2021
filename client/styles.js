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
  flex-wrap: wrap;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 15rem;
  border: solid 1px black;
  border-radius: 3rem;
  margin: 3rem;
  animation: ${neonGlow} 3s infinite;
  color: #86c232;
  padding-top: 1rem;

  transition-property: width;
  transition: width 1s, height 1s, transform 1s;

  & a {
    text-decoration: none;
    color: #86c232;
  }

  :hover {
    width: 40%;
    border: solid 1px greenyellow;
    font-weight: bold;
    background-color: greenyellow;
    box-shadow: none;
    color: black;
  }

  :hover a {
    color: black;
  }
`;

export const DescriptionBox = styled.p`
  display: none;
  ${Box}:hover & {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
    height: 100%;
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


// All Products view
export const Products = styled.div`
  display: flex;
`;
export const ProductContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 2%;
  flex: 1 16%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;
export const ProductInfo = styled.div`
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;
export const ImageCard = styled.img`
  max-width: 50%;
`;

export const ProductFilter = styled.div`
  display: flex;
`;
export const SortParent = styled.div`
  display: flex;
`;
export const SortChild = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export default {
  Title,
  Container,
  Box,
  DescriptionBox,
  Background,
  Record,
  Products,
  ProductContainer,
  ProductCard,
  ProductInfo,
  ImageCard,
  ProductFilter,
  SortParent,
  SortChild,
};

