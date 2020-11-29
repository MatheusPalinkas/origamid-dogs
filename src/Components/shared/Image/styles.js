import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-area: 1/1;
`;

const animateSkeleton = keyframes`
  0%{
    background-position: 0px;
  }
  100%{
    background-position: -200%;
  }
`;

export const Skeleton = styled.div`
  grid-area: 1/1;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: ${animateSkeleton} 1.5s infinite linear;
`;

export const ImageUI = styled.img`
  display: block;
  max-width: 100%;
  grid-area: 1/1;
  opacity: 0;
  transition: 0.2s;
`;
