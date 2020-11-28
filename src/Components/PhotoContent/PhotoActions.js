import React from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../Contexts/UserContext";
import useFetch from "../../Hooks/useFetch";

import { photoDelete } from "../../Services/photo";
import { Author, Visualizacoes, ButtonDeletar } from "./styles";

export default function PhotoActions({ photo }) {
  const user = React.useContext(UserContext);
  const { request, loading } = useFetch();

  async function handleDelete() {
    const confirm = confirm("Tem certeza que deseja deletar?");
    const token = localStorage.getItem("token");
    const { url, options } = photoDelete(photo.id, token);

    const { response } = await request(url, options);

    if (response.ok) window.location.reload();
  }
  const ButtonAction = () =>
    loading ? (
      <ButtonDeletar disabled>Carregando...</ButtonDeletar>
    ) : (
      <ButtonDeletar onClick={handleDelete}>Deletar</ButtonDeletar>
    );

  return (
    <>
      {true || (user.data && user.username === photo.author) ? (
        <ButtonAction />
      ) : (
        <Author>
          <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
          <Visualizacoes>{photo.acessos}</Visualizacoes>
        </Author>
      )}
    </>
  );
}
