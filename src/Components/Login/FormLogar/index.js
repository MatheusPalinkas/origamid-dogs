import React from "react";

import Button from "../../shared/Button";
import Error from "../../shared/Error";
import Input from "../../shared/Input";

import { Form, LinkPerdeu } from "./styles";

export default function FormLogar({
  handleSubmit,
  username,
  password,
  loading,
  error,
}) {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos'} />
      </Form>
      <LinkPerdeu to="/login/perdeu">Perdeu a senha?</LinkPerdeu>
    </>
  );
}
