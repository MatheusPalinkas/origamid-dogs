import React from "react";
import { useNavigate } from "react-router-dom";

import { LinkCadastro, Container, SubTitle, Text } from "./styles";

function Cadastro() {
  const navigate = useNavigate();

  return (
    <Container>
      <SubTitle>Cadastre-se</SubTitle>
      <Text>Ainda não possui conta? Cadastre-se no site.</Text>
      <LinkCadastro onClick={(e) => navigate("/login/criar")}>
        Cadastro
      </LinkCadastro>
    </Container>
  );
}

export default Cadastro;
