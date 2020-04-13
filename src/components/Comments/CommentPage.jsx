import React, { Component } from "react";
import * as api from "../../api/apiRequest";
import CommentCard from "./CommentCard";
import NewComment from "./NewComment";
import ErrorPage from "../ErrorPage";
import Loading from "../Loading";
import Sorting from "../Sorting";

export default class CommentPage extends Component {
  state = {
    articleIdComments: [],
    err: null,
    isLoading: true,
    page: 1,
    sort_by: "date",
  };

  componentDidMount() {
    this.fetchArticleIdComments();
  }

  fetchArticleIdComments = () => {
    const { article_id } = this.props;
    const { page } = this.state;

    api
      .getCommentsByArticleId({ article_id, page })
      .then((articleIdComments) => {
        this.setState({ articleIdComments, isLoading: false });
      })
      .catch((err) => this.setState({ err }));
  };

  updateComments = (sort_by) => {
    this.setState({ sort_by });
  };

  changePage = () => {
    this.setState((currentState) => {
      return { page: currentState.page + 1 };
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { page, sort_by } = this.state;
    const { article_id } = this.props;

    if (prevState.page !== page || prevState.sort_by !== sort_by) {
      api
        .getCommentsByArticleId({ article_id, page, sort_by })
        .then((articleIdComments) => this.setState({ articleIdComments }))
        .catch((err) => this.setState({ err }));
    }
  };

  postNewComment = (postedComment) => {
    this.setState((currentState) => {
      return {
        articleIdComments: [postedComment, ...currentState.articleIdComments],
      };
    });
  };

  deleteComment = (comment_id) => {
    api
      .deleteCommentsByCommentId(comment_id)
      .catch((err) => this.setState({ err }));
    const newCommentPage = this.state.articleIdComments.filter(
      (comment) => comment.comment_id !== comment_id
    );
    this.setState({ articleIdComments: newCommentPage });
  };

  render() {
    const { articleIdComments, err, isLoading, page } = this.state;
    const { article_id, loggedUser } = this.props;
    const totalPages = articleIdComments.length < 10;
    if (err) {
      return <ErrorPage err={err} />;
    } else {
      return (
        <main>
          {isLoading ? (
            <Loading />
          ) : (
            <React.Fragment>
              <section>
                <NewComment
                  loggedUser={loggedUser}
                  article_id={article_id}
                  postNewComment={this.postNewComment}
                />
              </section>
              <section>
                <Sorting
                  className="comment-sorting"
                  updateArticles={this.updateComments}
                  article_id={article_id}
                />
                {!totalPages ? (
                  <button className="comment-pages" onClick={this.changePage}>
                    Page {page}
                  </button>
                ) : (
                  <button
                    className="comment-pages"
                    onClick={() => this.setState({ page: 1 })}
                  >
                    Page {page}
                  </button>
                )}
                <ul className="comment-page-wrapper">
                  {articleIdComments.map((comment) => {
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
          )}
        </main>
      );
    }
  }
}
