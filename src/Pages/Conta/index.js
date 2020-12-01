import React from "react";
import { Routes, Route } from "react-router-dom";

import UserHeader from "../../Components/Conta/UserHeader";
import Feed from "../../Components/Feed";

import PostPhoto from "./PostPhoto";
import Stats from "./Stats";

import { Container } from "../../styles";
import { UserContext } from "../../Contexts/UserContext";
import NotFound from "../NotFound";
import Head from "../../Components/shared/Head";

function Conta() {
  const { data } = React.useContext(UserContext);
  return (
    <Container style={{ animation: "none" }}>
      <UserHeader />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Head title="Minha conta" />
              <Feed user={data.id} />
            </>
          }
        />
        <Route path="postar" element={<PostPhoto />} />
        <Route path="estatisticas" element={<Stats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default Conta;
