import styled from "styled-components";

import visualizacao from "../../Assets/visualizacao.svg";

import { animetLeft } from "../../styles";

export const Container = styled.div``;

export const List = styled.ul`
  ${animetLeft}
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Item = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;
  }

  @media (max-width: 40rem) {
    grid-column: initial;
    grid-row: initial;
  }

  &:hover {
    > span {
      display: flex;
    }
  }
`;

export const Photo = styled.img`
  grid-area: 1/1;
`;

export const Acessos = styled.span`
  grid-area: 1/1;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 1rem;
  text-align: center;
  display: none;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    display: block;
    width: 16px;
    height: 10px;
    margin-right: 0.25rem;
    background-image: url(${visualizacao});
  }
`;

export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  display: flex;
  table-layout: fixed;
  z-index: 10000;
  padding: 2rem calc(4rem + 15px) 2rem 4rem;

  @media (max-width: 40rem) {
    padding: 2rem calc(2rem + 15px) 2rem 2rem;
  }
`;
