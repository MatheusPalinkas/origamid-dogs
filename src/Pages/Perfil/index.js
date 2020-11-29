import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../../Components/Feed";

import { Container, Title } from "./styles";

function Perfil() {
  const { user } = useParams();
  return (
    <Container>
      <Title>{user}</Title>
      <Feed user={user} />
    </Container>
  );
}

export default Perfil;
