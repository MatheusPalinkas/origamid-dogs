import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

import { HeaderUI, Nav, IconDogs, Login } from "./styles";

export default function Header() {
  const { data } = React.useContext(UserContext);

  return (
    <HeaderUI>
      <Nav>
        <Link to="/" aria-label="Home">
          <IconDogs />
        </Link>
        {data ? (
          <Login to="/conta">{data.nome}</Login>
        ) : (
          <Login to="/login">Login / Criar</Login>
        )}
      </Nav>
    </HeaderUI>
  );
}
