import React from "react";
import FormPerdeuSenha from "../../Components/Login/FormPerdeuSenha";
import Head from "../../Components/shared/Head";

import { Container, Title } from "../../styles";

export default function LoginPerdeuSenha() {
  return (
    <Container>
      <Head title="Perdeu a senha" />
      <Title>Perdeu a senha ?</Title>
      <FormPerdeuSenha />
    </Container>
  );
}
