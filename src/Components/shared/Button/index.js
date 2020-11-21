import React from "react";

import { ButtonUI } from "./styles";

function Button({ children, disabled, props }) {
  return (
    <ButtonUI {...props} disabled={disabled}>
      {children}
    </ButtonUI>
  );
}

export default Button;
