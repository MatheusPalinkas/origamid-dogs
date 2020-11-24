import React from "react";
import { useNavigate } from "react-router-dom";

import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { photoPost } from "../../Services/photo";

import { number, obrigatorio } from "../../utils/validacao";

import FormUploadPhoto from "../../Components/Conta/FormUploadPhoto";

import { Container } from "./styles";

export default function PostPhoto() {
  const nome = useForm("", obrigatorio);
  const idade = useForm(0, number);
  const peso = useForm(0, number);
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDeafult();

    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = localStorage.getItem("token");
    const { url, options } = photoPost(token, formData);
    request(url, options);
  }

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);
  return (
    <Container>
      <FormUploadPhoto
        handleSubmit={handleSubmit}
        nome={nome}
        idade={idade}
        peso={peso}
        img={img}
        setImg={setImg}
        error={error}
        loading={loading}
      />
    </Container>
  );
}
