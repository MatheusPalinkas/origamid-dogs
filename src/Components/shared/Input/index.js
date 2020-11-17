import React from "react";

import { Container, Label, InputUI, Error } from "./styles";

function Input({ label, type, name }) {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <InputUI id={name} name={name} type={type} />
      <Error>Error</Error>
    </Container>
  );
}

export default Input;
