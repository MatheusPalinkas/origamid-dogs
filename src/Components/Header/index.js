import React from "react";
import { Link } from "react-router-dom";

import { HeaderUI, Nav, IconDogs, Login } from "./styles";

export default function Header() {
  return (
    <HeaderUI>
      <Nav>
        <Link to="/" aria-label="Home">
          <IconDogs />
        </Link>
        <Login to="/login">Login / Criar</Login>
      </Nav>
    </HeaderUI>
  );
}
