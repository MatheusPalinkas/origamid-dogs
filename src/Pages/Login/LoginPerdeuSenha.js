import React from "react";
import FormPerdeuSenha from "../../Components/Login/FormPerdeuSenha";

import { Container, Title } from "../../styles";

export default function LoginPerdeuSenha() {
  return (
    <Container>
      <Title>Perdeu a senha ?</Title>
      <FormPerdeuSenha />
    </Container>
  );
}
