import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../../Contexts/UserContext";
import useFetch from "../../Hooks/useFetch";

import { photoDelete } from "../../Services/photo";
import { Author, Visualizacoes, ButtonDeletar } from "./styles";

export default function PhotoActions({ photo }) {
  const { data } = React.useContext(UserContext);
  const { request, loading } = useFetch();
  const navigate = useNavigate();

  async function handleDelete() {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    const token = localStorage.getItem("token");
    const { url, options } = photoDelete(photo.id, token);

    const { response } = await request(url, options);

    if (response.ok) navigate("/conta");
  }
  const ButtonAction = () =>
    loading ? (
      <ButtonDeletar disabled>Carregando...</ButtonDeletar>
    ) : (
      <ButtonDeletar onClick={handleDelete}>Deletar</ButtonDeletar>
    );

  return (
    <>
      {data && data.username === photo.author ? (
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
