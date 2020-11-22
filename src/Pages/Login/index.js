import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginLogar from "./LoginLogar";
import LoginCriar from "./LoginCriar";
import LoginPerdeuSenha from "./LoginPerdeuSenha";
import LoginResetarSenha from "./LoginResetarSenha";

import { UserContext } from "../../Contexts/UserContext";

import { Container, DivForms } from "./styles";

export default function Login() {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/conta" />;

  return (
    <Container>
      <DivForms>
        <Routes>
          <Route path="" element={<LoginLogar />} />
          <Route path="criar" element={<LoginCriar />} />
          <Route path="perdeu" element={<LoginPerdeuSenha />} />
          <Route path="resetar" element={<LoginResetarSenha />} />
        </Routes>
      </DivForms>
    </Container>
  );
}
