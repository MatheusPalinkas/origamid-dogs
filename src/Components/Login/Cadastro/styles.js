import styled from "styled-components";
import { ButtonUI } from "../../shared/Button/styles";

export const Container = styled.div`
  margin-top: 4rem;
`;

export const Text = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const SubTitle = styled.h2`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 2rem;

  &::after {
    display: block;
    content: "";
    width: 3rem;
    height: 0.5rem;
    background: #ddd;
    border-radius: 0.2rem;
  }
`;

export const LinkCadastro = styled(ButtonUI)``;
