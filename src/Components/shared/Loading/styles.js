import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.4);
`;

export const LoadingUI = styled.div`
  margin: auto;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  padding-left: 5px;
`;

export const Icone = styled.svg``;

export const Grupo = styled.g`
  display: ${(props) => (props.ativo ? "block" : "none")};
`;
