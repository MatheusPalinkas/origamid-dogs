import React from "react";

import { Wrapper, Skeleton, ImageUI } from "./styles";

function Image({ alt, ...props }) {
  const [loading, setLoading] = React.useState(true);
  function handleLoad({ target }) {
    target.style.opacity = 1;
    setLoading(false);
  }

  return (
    <Wrapper>
      {loading && <Skeleton />}
      <ImageUI onLoad={handleLoad} alt={alt} {...props} />
    </Wrapper>
  );
}

export default Image;
