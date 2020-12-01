import React from "react";
import FormResetarSenha from "../../Components/Login/FormResetarSenha";
import Head from "../../Components/shared/Head";

import { Container, Title } from "../../styles";
export default function LoginResetarSenha() {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramsKey = params.get("key");
    const paramsLogin = params.get("login");

    if (paramsKey) setKey(paramsKey);
    if (paramsLogin) setLogin(paramsLogin);
  }, []);

  return (
    <Container>
      <Head title="Redefinir a senha" />
      <Title>Redefinir senha</Title>
      <FormResetarSenha key={key} login={login} />
    </Container>
  );
}
