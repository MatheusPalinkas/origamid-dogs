import React from "react";

import Feed from "../../Components/Feed";
import Head from "../../Components/shared/Head";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Head
        title="Fotos"
        description="Home do site de dog, com feed de fotos"
      />
      <Feed />
    </Container>
  );
}
