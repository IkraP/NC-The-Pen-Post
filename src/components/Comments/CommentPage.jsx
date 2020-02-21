import React, { Component } from "react";
import * as api from "../../api/apiRequest";
import CommentCard from "./CommentCard";
import NewComment from "./NewComment";
import ErrorPage from "../ErrorPage";

export default class CommentPage extends Component {
  state = {
    articleIdComments: [],
    err: null
  };

  componentDidMount() {
    this.fetchArticleIdComments();
  }

  fetchArticleIdComments = () => {
    const { article_id } = this.props;
    api
      .getCommentsByArticleId(article_id)
      .then(articleIdComments => this.setState({ articleIdComments }))
      .catch(err => this.setState({ err }));
  };

  postNewComment = postedComment => {
    this.setState(currentState => {
      return {
        articleIdComments: [postedComment, ...currentState.articleIdComments]
      };
    });
  };

  deleteComment = comment_id => {
    api
      .deleteCommentsByCommentId(comment_id)
      .catch(err => this.setState({ err }));
    const newCommentPage = this.state.articleIdComments.filter(
      comment => comment.comment_id !== comment_id
    );
    this.setState({ articleIdComments: newCommentPage });
  };

  render() {
    const { articleIdComments, err } = this.state;
    const { article_id, loggedUser } = this.props;
    if (err) {
      return <ErrorPage err={err} />;
    } else {
      return (
        <React.Fragment>
          <section>
            <NewComment
              loggedUser={loggedUser}
              article_id={article_id}
              postNewComment={this.postNewComment}
            />
          </section>
          <section>
            <ul className="comment-page-wrapper">
              {articleIdComments.map(comment => {
                return (
                  <CommentCard
                    loggedUser={loggedUser}
                    key={comment.comment_id}
                    comment={comment}
                    deleteComment={this.deleteComment}
                  />
                );
              })}
            </ul>
          </section>
        </React.Fragment>
      );
    }
  }
}
