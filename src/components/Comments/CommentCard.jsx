import React from "react";
import TimeAgo from "react-timeago";
import Voting from "../Voting";
import { IoIosTrash } from "react-icons/io";

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
      <Voting votes={comment.votes} comment_id={comment.comment_id} />
      <p>
        <TimeAgo date={comment.created_at} live={false} />
      </p>
      <button>
        <IoIosTrash />
      </button>
    </section>
  );
}
