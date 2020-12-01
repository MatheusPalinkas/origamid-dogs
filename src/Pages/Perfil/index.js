import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../../Components/Feed";
import Head from "../../Components/shared/Head";

import { Container, Title } from "./styles";

function Perfil() {
  const { user } = useParams();
  return (
    <Container>
      <Head title={user} />
      <Title>{user}</Title>
      <Feed user={user} />
    </Container>
  );
}

export default Perfil;
