import React from "react";
import TimeAgo from "react-timeago";
import { FaRegTrashAlt } from "react-icons/fa";
import Voting from "../Voting";

export default function CommentCard(props) {
  const handleDelete = () => {
    const { comment_id } = this.props.comment;
    this.props.deleteComment(comment_id);
  };
  const { comment, loggedUser } = props;
  return (
    <div>
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

        <Voting
          loggedUser={loggedUser}
          votes={comment.votes}
          comment_id={comment.comment_id}
        />
        <p>
          <TimeAgo date={comment.created_at} live={false} />
        </p>
        {loggedUser && (
          <FaRegTrashAlt id={comment.comment_id} onClick={handleDelete} />
        )}
      </section>
    </div>
  );
}
