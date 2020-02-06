import React, { Component } from "react";
import * as api from "../../api/apiRequest";

export default class NewComment extends Component {
  state = {
    comment: ""
  };
  handleChange = (text, key) => {
    this.setState({ [key]: text });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { comment } = this.state;
    const { article_id } = this.props;
    api.postCommentsByArticleId(article_id, comment).then(newComment => {
      this.setState({ comment: "" });
      this.props.postNewComment(newComment);
    });
  };

  render() {
    const { comment } = this.state;
    const { loggedUser } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Comment:
          <textarea
            required
            name="comment"
            value={comment}
            placeholder="Enter your comment ..."
            onChange={event => this.handleChange(event.target.value, "comment")}
          />
        </label>
        <button disabled={loggedUser === ""} type="submit">
          submit comment
        </button>
      </form>
    );
  }
}
