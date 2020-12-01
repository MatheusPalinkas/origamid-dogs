import React from "react";

import FormLogar from "../../Components/Login/FormLogar";
import Cadastro from "../../Components/Login/Cadastro";

import useForm from "../../Hooks/useForm";

import { UserContext } from "../../Contexts/UserContext";

import { Container, Title } from "../../styles";
import Head from "../../Components/shared/Head";

export default function LoginLogar() {
  const username = useForm("");
  const password = useForm("");

  const { userLogin, error, loading } = React.useContext(UserContext);

  function handleLogin(e) {
    e.preventDefault();
    if (username.validate() && password.validate())
      userLogin(username.value, password.value);
  }

  return (
    <Container>
      <Head title="Login" />
      <Title>Login</Title>
      {error && <p>{error}</p>}
      <FormLogar
        handleSubmit={handleLogin}
        username={username}
        password={password}
        loading={loading}
      />
      <Cadastro />
    </Container>
  );
}
