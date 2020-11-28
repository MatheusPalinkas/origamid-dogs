import React from "react";
import useFetch from "../../Hooks/useFetch";

import { commentPost } from "../../Services/comment";

import { Form, TextArea, ButtonEnviar, IconEnviar } from "./styles";

import Error from "../shared/Error";

export default function PhotoCommentsForm({ id, setComments }) {
  const [comment, setComment] = React.useState("");

  const { request, error } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const { url, options } = commentPost(id, { comment }, token);
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextArea
        id="comment"
        name="comment"
        placeholder="Comment ..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <ButtonEnviar aria-label="Commentar">
        <IconEnviar />
      </ButtonEnviar>

      {error && <Error error={error} />}
    </Form>
  );
}
