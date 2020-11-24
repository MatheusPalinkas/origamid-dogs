import React from "react";

import Error from "../../shared/Error";
import Input from "../../shared/Input";
import InputFile from "../../shared/InputFile";
import Button from "../../shared/Button";

import { Form } from "./styles";

import PreviewPhoto from "../../shared/PreviewPhoto";

function FormUploadPhoto({
  handleSubmit,
  nome,
  idade,
  peso,
  img,
  setImg,
  error,
  loading,
}) {
  function handleImgChange({ target }) {
    setImg({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0]),
    });
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...idade} />
        <Input label="Idade" type="number" name="idade" {...peso} />
        <InputFile id="img" handleChange={handleImgChange} />

        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </Form>
      {img.preview && <PreviewPhoto url={img.preview} />}
    </>
  );
}

export default FormUploadPhoto;
