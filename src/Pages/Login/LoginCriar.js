import React from "react";
import FormCadastro from "../../Components/Login/FormCadastro";

import useForm from "../../Hooks/useForm";
import { email as emailValidate, obrigatorio } from "../../utils/validacao";
import { userPost } from "../../Services/user";

import { Container, Title } from "../../styles";
import { UserContext } from "../../Contexts/UserContext";
import useFetch from "../../Hooks/useFetch";

export default function LoginCriar() {
  const username = useForm("", obrigatorio);
  const email = useForm("", emailValidate);
  const password = useForm("", obrigatorio);

  const { userLogin } = React.useContext(UserContext);

  const { loading, error, request } = useFetch();

  async function handleSubmit() {
    const { url, options } = userPost({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <Container>
      <Title>Cadastre-se</Title>
      <FormCadastro
        handleSubmit={handleSubmit}
        username={username}
        email={email}
        password={password}
        loading={loading}
        error={error}
      />
    </Container>
  );
}
