import React from "react";
import { Routes, Route } from "react-router-dom";

import UserHeader from "../../Components/Conta/UserHeader";
import Feed from "../../Components/Feed";

import PostPhoto from "./PostPhoto";
import Stats from "./Stats";

import { Container } from "../../styles";

function Conta() {
  return (
    <Container>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<PostPhoto />} />
        <Route path="estatisticas" element={<Stats />} />
      </Routes>
    </Container>
  );
}

export default Conta;
