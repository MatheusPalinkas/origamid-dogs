import styled from "styled-components";

import { Container as ContainerUI } from "../../styles";

export const Container = styled(ContainerUI)`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  > div {
    box-shadow: 0 10px 20px rgba(0, 0, 0, .1);
    border-radius: .2rem;
    display: grid;
    align-items: center;
  }

  @media (max-width: 40rem){
    grid-template-columns: 1fr;
  }
`;

export const Total = styled.div`
  grid-column: 1 /3;
  padding: 2rem;
  font-size: 2rem;

  @media (max-width: 40rem){
    grid-column: 1;
  }
`;

export const Acessos = styled.p`
`;