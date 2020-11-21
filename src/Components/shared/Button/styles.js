import styled from "styled-components";

export const ButtonUI = styled.button`
  font-size: 1rem;
  font-family: var(--type-fist);
  border: none;
  border-radius: 0.4rem;
  background: #fb1;
  color: #764701;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  min-width: 8rem;
  transition: all 0.1s ease;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  &:disabled {
    cursor: wait;
    opacity: 0.5;
  }
`;
