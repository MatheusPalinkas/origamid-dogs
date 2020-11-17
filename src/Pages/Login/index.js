import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginLogar from "./LoginLogar";
import LoginCriar from "./LoginCriar";
import LoginPerdeuSenha from "./LoginPerdeuSenha";
import LoginResetarSenha from "./LoginResetarSenha";

export default function Login() {
  return (
    <Routes>
      <Route path="" element={<LoginLogar />} />
      <Route path="criar" element={<LoginCriar />} />
      <Route path="perdeu" element={<LoginPerdeuSenha />} />
      <Route path="resetar" element={<LoginResetarSenha />} />
    </Routes>
  );
}
