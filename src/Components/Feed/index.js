import React from "react";
import PropTypes from "prop-types";

import FeedPhotos from "./FeedPhotos";
import FeedModal from "./FeedModal";

function Feed({ user = 0 }) {
  const [pages, setPages] = React.useState([1]);
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [infinite, setInfinite] = React.useState(true);
  let wait = false;

  const infiniteScroll = React.useCallback(() => {
    if (infinite) {
      const scroll = window.scrollY;
      const height = window.outerHeight - document.body.offsetHeight;
      if (scroll > height * 0.75 && !wait) {
        setPages((oldPages) => [...oldPages, oldPages.length + 1]);
        wait = true;
        setTimeout(() => {
          wait = false;
        }, 500);
      }
    }
  }, [setPages, infinite]);

  React.useEffect(() => {
    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infiniteScroll]);

  return (
    <>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </>
  );
}

Feed.protoTypes = {
  user: PropTypes.oneOfType(
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ),
};

export default Feed;
