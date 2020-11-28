import React from "react";

import { UserContext } from "../../Contexts/UserContext";

import PhotoCommentsForm from "./PhotoCommentsForm";

import { Comments, Comment } from "./styles";

function PhotoComments(props) {
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);
  const commentSection = React.useRef(null);

  React.useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight;
  }, [comments, commentSection]);

  return (
    <>
      <Comments ref={commentSection}>
        {comments.map((comment) => (
          <Comment key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </Comment>
        ))}
      </Comments>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
}

export default PhotoComments;
