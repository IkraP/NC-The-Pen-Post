import React, { Component } from "react";
import * as api from "../../api/apiRequest";
import CommentPage from "../Comments/CommentPage";
import ErrorPage from "../ErrorPage";
import Loading from "../Loading";

export default class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true,
    err: null
  };

  componentDidMount() {
    this.fetchArticleByArticleId();
  }

  fetchArticleByArticleId = () => {
    const { article_id } = this.props;
    api
      .getArticleByArticleId(article_id)
      .then(article => this.setState({ article, isLoading: false }))
      .catch(err => this.setState({ err }));
  };

  render() {
    const { article, isLoading, err } = this.state;
    const { article_id, loggedUser } = this.props;
    console.log(loggedUser);
    if (err) {
      return <ErrorPage err={err} />;
    } else {
      return (
        <main>
          {isLoading ? (
            <Loading />
          ) : (
            <section className="indi-articles">
              <h3 className="article-page-title">{article.title}</h3>
              <p className="article-page-body">Article: {article.body}</p>
              <p className="article-page-author">Author: {article.author}</p>
              <CommentPage loggedUser={loggedUser} article_id={article_id} />
            </section>
          )}
        </main>
      );
    }
  }
}
