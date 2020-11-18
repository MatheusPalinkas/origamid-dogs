import React from "react";

import { Container, Label, InputUI, Error } from "./styles";

function Input({ label, type, name, value, error, onChange, onBlur }) {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <InputUI
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

export default Input;
