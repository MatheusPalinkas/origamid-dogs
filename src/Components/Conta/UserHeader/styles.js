import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
  position: relative;
`;

const navMobile = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 0px;
  padding: 0 1rem;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  transform: translateX(-10px);
  opacity: 0;
  pointer-events: none;

  > svg {
    margin-right: 0.5rem;
  }
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  ${(props) =>
    props.mobile &&
    css`
      ${navMobile}
    `}
  ${(props) =>
    props.ativo &&
    css`
      transition: 0.3s;
      transform: initial;
      opacity: 1;
      z-index: 100;
      pointer-events: initial;
    `}
`;

const cssItemNavMobile = css`
  display: flex;
  align-items: center;
  background: none;
  width: 100%;
  border: none;
  border-bottom: 1px solid #eee;
  padding: 0.5rem 0;
  cursor: pointer;

  &:hover svg > * {
    fill: #fb1;
  }
`;

const cssItemNav = css`
  background: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;

  ${(props) =>
    !props.mobile
      ? css`
          &:hover,
          &:focus {
            background: #fff;
            box-shadow: 0 0 0 3px #eee;
            border-color: #333;
            outline: none;
          }

          &.active {
            background: #fff;
            box-shadow: 0 0 0 3px #fea;
            border-color: #fb1;
          }
          &.active > svg > * {
            fill: #fb1;
          }
        `
      : css`
          ${cssItemNavMobile}
        `}
`;

export const Link = styled(NavLink)`
  ${cssItemNav}
`;

export const ButtonExit = styled.button`
  border: none;
  background: none;
  ${cssItemNav}
`;

export const MobileButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  ${cssItemNav}
  width: 40px;
  height: 40px;

  &::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;

    ${(props) =>
      props.mobile &&
      css`
        transform: rotate(-90deg);
        width: 4px;
        height: 4px;
        box-shadow: 0 8px currentColor, 0 -8px currentColor;
      `};
  }

  &:hover,
  &:focus {
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
    outline: none;
  }
`;
