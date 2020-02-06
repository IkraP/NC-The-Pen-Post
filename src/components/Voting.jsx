import React, { Component } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import * as api from "../api/apiRequest";

export default class Voting extends Component {
  state = {
    voteChange: 0
  };

  handleClick = inc_votes => {
    const { article_id } = this.props;
    const { comment_id } = this.props;

    this.setState(currentState => {
      return { voteChange: currentState.voteChange + inc_votes };
    });
    if (!article_id) api.patchVotesByCommentId(comment_id, inc_votes);
    else {
      api.patchVotesByArticleId(article_id, inc_votes);
    }
  };

  render() {
    const { votes, loggedUser } = this.props;

    const { voteChange } = this.state;
    return (
      <section>
        <p>Votes: {votes + voteChange}</p>
        <button
          className="votes-btn"
          onClick={() => this.handleClick(1)}
          disabled={voteChange > 0 || loggedUser === null}
        >
          <IoIosArrowUp />
        </button>
        <button
          className="votes-btn"
          onClick={() => this.handleClick(-1)}
          disabled={voteChange < 0 || loggedUser === null}
        >
          <IoIosArrowDown />
        </button>
      </section>
    );
  }
}
