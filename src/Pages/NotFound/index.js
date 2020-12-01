import React from "react";
import Head from "../../Components/shared/Head";

import { Container, Title, Text } from "./styles";

function NotFound() {
  return (
    <Container>
      <Head title="404" />
      <Title>Error: 404</Title>
      <Text>Página não encontrada</Text>
    </Container>
  );
}

export default NotFound;
