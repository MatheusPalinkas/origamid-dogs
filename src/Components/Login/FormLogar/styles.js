import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  margin-bottom: 2rem;
`;

export const LinkPerdeu = styled(Link)`
  display: inline-block;
  color: #666;
  padding: 0.5rem 0;
  line-height: 1;

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    background: currentColor;
  }
`;
