import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import Usuario from "../../Assets/usuario.svg";

export const HeaderUI = styled.header`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: #fff;
  top: 0;
`;

export const Nav = styled.nav`
  max-width: 50rem;
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const IconDogs = styled(Dogs)`
  box-sizing: content-box;
  padding: 0.5rem 0;
`;

export const Login = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;

  &:after {
    content: "";
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url(${Usuario}) no-repeat center center;
    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
`;
