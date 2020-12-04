import React from "react";

import Button from "../../shared/Button";
import Input from "../../shared/Input";
import Error from "../../shared/Error";

function FormCadastro({
  handleSubmit,
  loading,
  error,
  username,
  email,
  password,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Input label="Usuário" type="text" name="username" {...username} />
      <Input label="E-mail" type="email" name="email" {...email} />
      <Input label="Senha" type="password" name="password" {...password} />
      {loading ? (
        <Button disabled>Carregando...</Button>
      ) : (
        <Button>Cadastrar</Button>
      )}
      <Error error={error && 'Dados incorretos'} />
    </form>
  );
}

export default FormCadastro;
