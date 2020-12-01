import styled, { css, keyframes } from "styled-components";

const animeLeft = keyframes`
  100%{
    transform: initial;
  }
  80%{
    opacity: initial;
    transform: translateX(50px);
  }
  0%{
    opacity: 0;
    transform: translateX(-200px);
  }
`;

export const animateLatir = keyframes`  
  0%{
    opacity: 0;
    transform scale(.4)
  }
  100%: {
    opacity: initial;
    transform: initial;
  }
`;

export const animateEnter = keyframes`
  0%{
    opacity: 0;
    transform scale(.8)
  }
  100%: {
    opacity: initial;
    transform: initial;
  }
`;

export const animetLeft = css`
  animation-name: ${animeLeft};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
`;

export const Container = styled.div`
  max-width: 50rem;
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  ${animetLeft}
`;

export const Title = styled.h1`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
  z-index: 5;

  &::after {
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;

export const Body = styled.main`
  flex: 1;
`;

export const App = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 10rem);
`;
