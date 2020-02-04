import React, { Component } from "react";
import * as api from "../../api/apiRequest";
import CommentCard from "./CommentCard";
import NewComment from "./NewComment";

export default class CommentPage extends Component {
  state = {
    articleIdComments: []
  };

  componentDidMount() {
    this.fetchArticleIdComments();
  }

  fetchArticleIdComments = () => {
    const { article_id } = this.props;
    api
      .getCommentsByArticleId(article_id)
      .then(articleIdComments => this.setState({ articleIdComments }));
  };

  render() {
    const { articleIdComments } = this.state;

    return (
      <React.Fragment>
        <section>
          <NewComment />
          <ul>
            {articleIdComments.map(comment => {
              return <CommentCard key={comment.comment_id} comment={comment} />;
            })}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}
