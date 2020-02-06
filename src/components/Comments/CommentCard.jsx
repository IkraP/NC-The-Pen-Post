import React, { Component } from "react";
import TimeAgo from "react-timeago";
import { FaRegTrashAlt } from "react-icons/fa";
import Voting from "../Voting";

export default class CommentCard extends Component {
  handleDelete = event => {
    console.dir(event.target.id);
  };

  render() {
    const { comment, loggedUser } = this.props;

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

        <Voting
          loggedUser={loggedUser}
          votes={comment.votes}
          comment_id={comment.comment_id}
        />
        <p>
          <TimeAgo date={comment.created_at} live={false} />
        </p>
        {loggedUser && (
          <FaRegTrashAlt id={comment.comment_id} onClick={this.handleDelete} />
        )}
      </section>
    );
  }
}
