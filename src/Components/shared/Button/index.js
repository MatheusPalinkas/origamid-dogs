import React from "react";

import { ButtonUI } from "./styles";

function Button({ children, props }) {
  return <ButtonUI {...props}>{children}</ButtonUI>;
}

export default Button;
