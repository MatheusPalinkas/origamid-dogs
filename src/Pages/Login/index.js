import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginLogar from "./LoginLogar";
import LoginCriar from "./LoginCriar";
import LoginPerdeuSenha from "./LoginPerdeuSenha";
import LoginResetarSenha from "./LoginResetarSenha";

import { UserContext } from "../../Contexts/UserContext";

export default function Login() {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/conta" />;

  return (
    <Routes>
      <Route path="" element={<LoginLogar />} />
      <Route path="criar" element={<LoginCriar />} />
      <Route path="perdeu" element={<LoginPerdeuSenha />} />
      <Route path="resetar" element={<LoginResetarSenha />} />
    </Routes>
  );
}
