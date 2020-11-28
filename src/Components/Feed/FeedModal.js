import React from "react";

import { Modal } from "./styles";

import useFetch from "../../Hooks/useFetch";
import { photoGet } from "../../Services/photo";

import Error from "../shared/Error";
import Loading from "../shared/Loading";
import PhotoContent from "../PhotoContent";

function FeedModal({ photo, setModalPhoto }) {
  const { data, loading, error, request } = useFetch();

  const getPhoto = React.useCallback(
    async (id) => {
      const { url, options } = photoGet(id);
      await request(url, options);
    },
    [request]
  );

  function handleOutsideClick({ target, currentTarget }) {
    if (target === currentTarget) {
      setModalPhoto(false);
    }
  }

  React.useEffect(() => {
    getPhoto(photo.id);
  }, [photo, getPhoto]);

  React.useEffect(() => {
    const headerMenu = document.querySelector("#header-menu");
    headerMenu.style.zIndex = 0;

    return () => {
      headerMenu.style.zIndex = 100;
    };
  }, []);
  return (
    <Modal onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </Modal>
  );
}

export default FeedModal;
