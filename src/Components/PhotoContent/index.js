import React from "react";
import { Link } from "react-router-dom";

import PhotoComments from "./PhotoComments";
import PhotoActions from "./PhotoActions";

import { Title } from "../../styles";

import {
  Photo,
  DivImg,
  Image,
  Details,
  DetailsAuthor,
  Atributos,
  ItemAtributo,
} from "./styles";

function PhotoContent({ data }) {
  const { photo, comments } = data;

  return (
    <Photo>
      <DivImg>
        <Image src={photo.src} alt={photo.title} />
      </DivImg>
      <Details>
        <DetailsAuthor>
          <PhotoActions photo={photo} />
          <Title>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </Title>
          <Atributos>
            <ItemAtributo>{photo.peso} Kg</ItemAtributo>
            <ItemAtributo>
              {photo.idade} {photo.idade <= 1 ? "ano" : "anos"}
            </ItemAtributo>
          </Atributos>
        </DetailsAuthor>
        <PhotoComments id={photo.id} comments={comments} />
      </Details>
    </Photo>
  );
}

export default PhotoContent;
