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

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.articleIdComments.length !== prevState.articleIdComments.length
    ) {
      return this.fetchArticleIdComments();
    }
  }

  postNewComment = postedComment => {
    this.setState(currentState => {
      return {
        articleIdComments: [postedComment, ...currentState.articleIdComments]
      };
    });
  };

  render() {
    const { articleIdComments } = this.state;
    const { article_id } = this.props;

    return (
      <React.Fragment>
        <section>
          <NewComment
            article_id={article_id}
            postNewComment={this.postNewComment}
          />
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
