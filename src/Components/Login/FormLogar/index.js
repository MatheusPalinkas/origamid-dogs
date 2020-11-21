import React from "react";

import Button from "../../shared/Button";
import Input from "../../shared/Input";

import { Form, LinkPerdeu } from "./styles";

export default function FormLogar({
  handleSubmit,
  username,
  password,
  loading,
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
      </Form>
      <LinkPerdeu to="/login/perdeu">Perdeu a senha?</LinkPerdeu>
    </>
  );
}
