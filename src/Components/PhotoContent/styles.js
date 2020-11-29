import styled, { css } from "styled-components";
import visualizacao from "../../Assets/visualizacao-black.svg";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";

import { animateEnter, animateLatir } from "../../styles";
import Image from "../shared/Image";

export const Details = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  max-height: 36rem;
`;

export const Photo = styled.div`
  margin: 0 auto;
  height: 36rem;
  border-radius: 0.2rem;
  background: #fff;
  display: grid;

  grid-template-rows: 1fr;
  overflow: hidden;
  animation: ${animateEnter} 0.3s ease forwards;
  transition: all 0.2s;

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
    grid-template-rows: auto auto auto;
  }

  ${(props) =>
    props.single
      ? css`
          height: auto;
          overflow: visible;
          grid-template-columns: 1fr;
          grid-template-rows: auto auto auto;

          img {
            border-radius: 0.2rem;
            overflow: hidden;
          }

          ${Details} > * {
            padding: 0;
            padding-top: 2rem;
          }
        `
      : css`
          grid-template-columns: 36rem 20rem;
        `}
`;

export const DivImg = styled.div`
  grid-row: span 3;
  @media (max-width: 64rem) {
    grid-row: 1;
  }
`;

export const ImageUI = styled(Image)`
  grid-row: 1/ 4;
  min-width: 100%;
`;

export const DetailsAuthor = styled.div`
  padding: 2rem 2rem 0 2rem;
`;

export const Author = styled.p`
  opacity: 0.5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a:hover {
    text-decoration: underline;
  }
`;

export const Visualizacoes = styled.span`
  &::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    background: url(${visualizacao}) no-repeat;
  }
`;

export const Atributos = styled.ul`
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const ItemAtributo = styled.li`
  margin-right: 2rem;

  &::before {
    content: "";
    display: inline-block;
    height: 20px;
    margin-right: 0.5rem;
    position: relative;
    top: 3px;
    width: 2px;
    background: #333;
    margin-top: 5px;
  }
`;

export const Comments = styled.ul`
  padding: 0 2rem;
  overflow-y: auto;
  word-break: break-word;

  @media (max-width: 64rem) {
    max-height: 320px;
  }
`;

export const Comment = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  font-size: 1rem;
  font-family: var(--type-first);
  resize: none;
  border: 1px solid #eee;
  padding: 0.5rem;
  border-radius: 0.2rem;
  background: #eee;
  transition: 0.2s;

  &:focus,
  &:hover {
    outline: none;
    border-color: #fb1;
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
  }
`;

export const ButtonEnviar = styled.button`
  border: none;
  cursor: pointer;
  color: #333;
  background: transparent;
  font-size: 1rem;
  padding: 0 1rem;
  overflow: hidden;

  &:hover,
  &:focus {
    outline: none;
  }

  &:hover > svg path,
  &:focus > svg path {
    fill: #fea;
    stroke: #fb1;
  }

  &:hover > svg g,
  &:focus > svg g {
    animation: ${animateLatir} 0.6s infinite;
  }
`;

export const IconEnviar = styled(Enviar)``;

export const ButtonDeletar = styled.button`
  background: #ddd;
  padding: 0.3rem 0.6rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-family: var(--type-first);
  cursor: pointer;
  border-radius: 0.4rem;
  transition: 0.1s;

  &:focus,
  &:hover {
    outline: none;
    background: #fff;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
  }
`;
