import React from "react";

import { Label, Input, IconAdd } from "./styles";

function InputFile({ id, handleChange }) {
  const [img, setImg] = React.useState({});

  function handleImgChange({ target }) {
    setImg({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0]),
    });
  }
  return (
    <Label>
      <IconAdd />
      <Input type="file" name={id} id={id} onChange={handleChange} />
    </Label>
  );
}

export default InputFile;
