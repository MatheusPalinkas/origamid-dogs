import React from "react";

import { ErrorUI } from "./styles";

function Error({ error }) {
  if (!error) return null;
  return <ErrorUI>{error}</ErrorUI>;
}

export default Error;
