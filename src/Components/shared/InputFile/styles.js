import styled from "styled-components";
import { ReactComponent as Add } from "../../../Assets/adicionar.svg";

export const Label = styled.label`
  border: 1px solid #eee;
  width: 100%;
  font-size: 1rem;
  border-radius: 0.4rem;
  background: #eee;
  padding: 0.8rem;
  transition: 0.1s ease;
  margin-bottom: 1rem;
  display: block;
  align-items: center;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    border-color: #fb1;
    background: #fff;
    box-shadow: 0 0 0 3px #fea;

    > svg {
      transform: scale(1.2) translateY(-2px);
    }
  }
`;

export const Input = styled.input`
  display: none;
`;

export const IconAdd = styled(Add)`
  display: block;
  margin: 0 auto;
  transition: all 0.2s;
`;
