import React from "react";
import TimeAgo from "react-timeago";

export default function CommentCard(props) {
  const { comment } = props;
  return (
    <section
      style={{
        border: "solid 1px red",
        width: "50%",
        textAlign: "center",
        display: "inline-block"
      }}
    >
      <p>{comment.body}</p>
      <p>{comment.author}</p>
      <p>
        <TimeAgo date={comment.created_at} live={false} />
      </p>
    </section>
  );
}
