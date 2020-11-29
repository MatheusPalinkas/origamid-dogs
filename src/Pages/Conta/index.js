import React from "react";
import { Routes, Route } from "react-router-dom";

import UserHeader from "../../Components/Conta/UserHeader";
import Feed from "../../Components/Feed";

import PostPhoto from "./PostPhoto";
import Stats from "./Stats";

import { Container } from "../../styles";
import { UserContext } from "../../Contexts/UserContext";

function Conta() {
  const { data } = React.useContext(UserContext);
  return (
    <Container style={{ animation: "none" }}>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<PostPhoto />} />
        <Route path="estatisticas" element={<Stats />} />
      </Routes>
    </Container>
  );
}

export default Conta;
