import styled from "styled-components";
import background from "../../Assets/login.jpg";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100vh;
  gap: 2rem;

  &::before {
    content: "";
    display: block;
    background: url(${background}) no-repeat center center;
    background-size: cover;
  }
  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }
  }
`;

export const DivForms = styled.div`
  max-width: 30rem;
  padding: 1rem;

  @media (max-width: 40rem) {
    max-width: 100%;
  }
`;
