import React from "react";

import { Item, Photo, Acessos } from "./styles";

export default function FeedPhotoItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <Item onClick={handleClick}>
      <Photo src={photo.src} alt={photo.title} />
      <Acessos>{photo.acessos}</Acessos>
    </Item>
  );
}
