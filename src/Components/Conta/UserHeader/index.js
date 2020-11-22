import React from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../../Contexts/UserContext";
import useMedia from "../../../Hooks/useMedia";

import { ReactComponent as MinhasFotos } from "../../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../../Assets/sair.svg";

import { Container, Nav, ButtonExit, Link, MobileButton } from "./styles";
import { Title } from "../../../styles";

function UserHeader() {
  const [menuMobileOpen, setMenuMobileOpen] = React.useState(false);
  const [title, setTitle] = React.useState("Título");
  const { userLoagout } = React.useContext(UserContext);

  const mobile = useMedia("(max-width: 40rem)");
  const location = useLocation();

  React.useEffect(() => {
    const pathsNames = {
      "/conta": "Minha conta",
      "/conta/estatisticas": "Estatísticas",
      "/conta/postar": "Poste Sua Foto",
    };
    setTitle(pathsNames[location.pathname]);
    setMenuMobileOpen(false);
  }, [location]);

  return (
    <Container>
      <Title>{title}</Title>
      {mobile && (
        <MobileButton
          aria-label="menu"
          onClick={() => setMenuMobileOpen((state) => !state)}
          mobile={menuMobileOpen}
        ></MobileButton>
      )}
      <Nav mobile={mobile} ativo={menuMobileOpen}>
        <Link to="/conta" end mobile={mobile}>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </Link>
        <Link to="/conta/estatisticas" mobile={mobile}>
          <Estatisticas />
          {mobile && "Estatisticas"}
        </Link>
        <Link to="/conta/postar" mobile={mobile}>
          <AdicionarFoto />
          {mobile && "Adicionar Foto"}
        </Link>
        <ButtonExit onClick={() => userLoagout()} mobile={mobile}>
          <Sair />
          {mobile && "Sair"}
        </ButtonExit>
      </Nav>
    </Container>
  );
}

export default UserHeader;
