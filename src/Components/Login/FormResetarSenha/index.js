import React from "react";

import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";

import Button from "../../shared/Button";
import Input from "../../shared/Input";
import Error from "../../shared/Error";

import { passwordResetPost } from "../../../Services/password";

import { Form } from "./styles";
import { useNavigate } from "react-router-dom";

export default function FormResetarSenha({ key, login }) {
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.validate()) {
      const { url, options } = passwordResetPost({
        key: key,
        login: login,
        password: password.value,
      });
      const { response, json } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        label="Nova senha"
        type="password"
        name="passwords"
        {...password}
      />
      {loading ? (
        <Button disabled>Carregando...</Button>
      ) : (
        <Button>Redefinir</Button>
      )}
      {error && <Error error={error} />}
    </Form>
  );
}
