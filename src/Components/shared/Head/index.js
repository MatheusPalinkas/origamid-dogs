import React from "react";

export default function Head({ title, description }) {
  React.useEffect(() => {
    document.title = `${title} | Dogs`;
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", description || "");
  }, []);
  return <></>;
}
