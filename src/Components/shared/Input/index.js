import React from "react";

import Error from "../Error";
import { Container, Label, InputUI } from "./styles";

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
      {error && <Error error={error} />}
    </Container>
  );
}

export default Input;
