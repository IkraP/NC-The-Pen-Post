import React, { Component } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import * as api from "../api/apiRequest";
import ErrorPage from "./ErrorPage";

export default class Voting extends Component {
  state = {
    voteChange: 0,
    err: null,
  };

  handleClick = (inc_votes) => {
    const { article_id } = this.props;
    const { comment_id } = this.props;

    this.setState((currentState) => {
      return { voteChange: currentState.voteChange + inc_votes };
    });
    if (!article_id)
      api
        .patchVotesByCommentId(comment_id, inc_votes)
        .catch((err) => this.setState({ err }));
    else {
      api
        .patchVotesByArticleId(article_id, inc_votes)
        .catch((err) => this.setState({ err }));
    }
  };

  render() {
    const { votes, loggedUser } = this.props;
    const { voteChange, err } = this.state;
    if (err) {
      return <ErrorPage err={err} />;
    } else {
      return (
        <section>
          <p className="voting-title">Votes: {votes + voteChange}</p>

          <button
            className="votes-btn"
            onClick={() => this.handleClick(1)}
            disabled={voteChange > 0 || loggedUser === ""}
          >
            <FaChevronUp size={25} />
          </button>
          <button
            className="votes-btn"
            onClick={() => this.handleClick(-1)}
            disabled={voteChange < 0 || loggedUser === ""}
          >
            <FaChevronDown size={25} />
          </button>
        </section>
      );
    }
  }
}
