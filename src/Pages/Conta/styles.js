import styled from "styled-components";

import { Container as ContainerDad } from "../../styles";

export const Container = styled(ContainerDad)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 0;

  @media (max-width: 40rem){
    grid-template-columns: 1fr;
  }
`;
