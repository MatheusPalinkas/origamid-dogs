import React from "react";

import Button from "../../shared/Button";
import Input from "../../shared/Input";

export default function FormLogar({ handleSubmit, username, password }) {
  return (
    <form onSubmit={handleSubmit}>
      <Input label="Usuário" type="text" name="username" {...username} />
      <Input label="Senha" type="password" name="password" {...password} />
      <Button>Entrar</Button>
    </form>
  );
}
