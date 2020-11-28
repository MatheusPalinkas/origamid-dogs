import React from "react";

import useFetch from "../../Hooks/useFetch";
import { photosGet } from "../../Services/photo";

import Error from "../shared/Error";
import Loading from "../shared/Loading";

import FeedPhotoItem from "./FeedPhotoItem";

import { List } from "./styles";

function FeedPhotos({ setModalPhoto }) {
  const { data, loading, error, request } = useFetch();

  const getPhotos = React.useCallback(async () => {
    const { url, options } = photosGet({ page: 1, total: 6, user: 0 });
    const { response, json } = await request(url, options);
  }, [request]);

  React.useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <List>
        {data.map((foto) => (
          <FeedPhotoItem
            key={foto.id}
            photo={foto}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </List>
    );

  return null;
}

export default FeedPhotos;
