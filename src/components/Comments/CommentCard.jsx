import React from "react";
import TimeAgo from "react-timeago";
import { FaRegTrashAlt } from "react-icons/fa";
import Voting from "../Voting";

export default function CommentCard(props) {
  const handleDelete = () => {
    const { comment_id } = props.comment;
    props.deleteComment(comment_id);
  };
  const { comment, loggedUser } = props;
  return (
    <div>
      <section className="all-comments">
        <p className="all-comment-body">{comment.body}</p>
        <p className="all-comment-author">Author:{comment.author}</p>

        <Voting
          loggedUser={loggedUser}
          votes={comment.votes}
          comment_id={comment.comment_id}
        />
        <p className="all-comment-body">
          <TimeAgo date={comment.created_at} live={false} />
        </p>
        {comment.author === loggedUser && (
          <FaRegTrashAlt
            size={20}
            id={comment.comment_id}
            onClick={handleDelete}
          />
        )}
      </section>
    </div>
  );
}
