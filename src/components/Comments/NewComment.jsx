import React, { Component } from "react";

export default class NewComment extends Component {
  state = {
    username: "",
    comment: ""
  };
  handleChange = (text, key) => {
    this.setState({ [key]: text });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.dir(event);
  };
  render() {
    const { username, comment } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            required
            type="text"
            name="username"
            value={username}
            onChange={event =>
              this.handleChange(event.target.value, "username")
            }
          />
        </label>
        <label>
          Comment:
          <textarea
            required
            wrap
            name="comment"
            value={comment}
            onChange={event => this.handleChange(event.target.value, "comment")}
          />
        </label>
        <button type="submit">submit comment</button>
      </form>
    );
  }
}
