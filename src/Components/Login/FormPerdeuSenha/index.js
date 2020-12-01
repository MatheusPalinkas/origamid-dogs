import React from "react";

import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";

import Error from "../../shared/Error";
import Input from "../../shared/Input";
import Button from "../../shared/Button";

import { BASE_URL } from "../../../Services/BASE_URL";
import { passwordLostPost } from "../../../Services/password";

import { Form, TextConfirm } from "./styles";

function FormPerdeuSenha() {
  const email = useForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.validate()) {
      const { url, options } = passwordLostPost({
        login: email.value,
        url: `http://localhost:3000/login/resetar`,
      });
      request(url, options);
    }
  };

  return (
    <>
      {data ? (
        <TextConfirm>{data}</TextConfirm>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Input label="E-mail / Usuario" type="text" name="email" {...email} />
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Enviar email</Button>
          )}

          {error && <Error error={error} />}
        </Form>
      )}
    </>
  );
}

export default FormPerdeuSenha;
