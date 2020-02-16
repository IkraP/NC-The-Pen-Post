import React, { Component } from "react";
import * as api from "../../api/apiRequest";
import ErrorPage from "../ErrorPage";

export default class NewComment extends Component {
  state = {
    comment: "",
    err: null
  };
  handleChange = (text, key) => {
    this.setState({ [key]: text });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { comment } = this.state;
    const { article_id } = this.props;
    const { loggedUser } = this.props;
    api
      .postCommentsByArticleId(article_id, loggedUser, comment)
      .then(newComment => {
        this.setState({ comment: "" });
        this.props.postNewComment(newComment);
      })
      .catch(err => this.setState({ err }));
  };

  render() {
    const { comment, err } = this.state;
    const { loggedUser } = this.props;
    if (err) {
      return <ErrorPage err={err} />;
    } else {
      return (
        <form className="new-comment-form" onSubmit={this.handleSubmit}>
          <p className="comment-title">Comments</p>
          <label className="comment-label">Add a new comment: </label>
          <textarea
            className="comment-textarea"
            required
            name="comment"
            value={comment}
            placeholder="Enter your comment ..."
            onChange={event => this.handleChange(event.target.value, "comment")}
          />
          <button
            className="comment-btn"
            disabled={loggedUser === ""}
            type="submit"
          >
            submit comment
          </button>
        </form>
      );
    }
  }
}
