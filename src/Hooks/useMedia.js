import React from "react";

function useMedia(media) {
  const [match, setMatch] = React.useState(null);

  const changeMatch = React.useCallback(() => {
    const { matches } = window.matchMedia(media);
    setMatch(matches);
  }, [media]);

  React.useEffect(() => {
    window.addEventListener("resize", changeMatch);

    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media, changeMatch]);

  return match;
}

export default useMedia;
