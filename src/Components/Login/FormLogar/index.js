import React from "react";
import Button from "../../shared/Button";
import Input from "../../shared/Input";

export default function FormLogar({ handleSubmit }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Usuário" type="text" name="username" />
      <Input label="Senha" type="password" name="password" />
      <Button>Entrar</Button>
    </form>
  );
}
