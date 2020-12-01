import React from "react";
import { useParams } from "react-router-dom";

import useFetch from "../../Hooks/useFetch";
import { photoGet } from "../../Services/photo";

import Error from "../../Components/shared/Error";
import Loading from "../../Components/shared/Loading";
import PhotoContent from "../../Components/PhotoContent";

import { Container } from "./styles";
import Head from "../../Components/shared/Head";

export default function Photo() {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  const getPhoto = React.useCallback(async () => {
    const { url } = photoGet(id);
    await request(url);
  }, [request, id]);

  React.useEffect(() => {
    getPhoto();
  }, [getPhoto]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <Container>
        <Head title={data.photo.title} />
        <PhotoContent data={data} single />
      </Container>
    );

  return null;
}
