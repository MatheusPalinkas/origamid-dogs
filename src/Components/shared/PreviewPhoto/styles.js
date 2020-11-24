import styled from "styled-components";

export const Photo = styled.div`
  border-radius: 1rem;
  background-image: url(${(props) => props.url});
  background-position: center center;
  background-size: cover;

  &::after {
    content: "";
    display: block;
    height: 0px;
    padding-bottom: 100%;
  }
`;
