import React from "react";

import { Label, Input, IconAdd } from "./styles";

function InputFile({ id, handleChange }) {
  return (
    <Label>
      <IconAdd />
      <Input type="file" name={id} id={id} onChange={handleChange} />
    </Label>
  );
}

export default InputFile;
