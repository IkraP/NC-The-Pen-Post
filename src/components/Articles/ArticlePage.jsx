import React, { Component } from "react";
import * as api from "../../api/apiRequest";
import CommentPage from "../Comments/CommentPage";

export default class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true
  };

  componentDidMount() {
    this.fetchArticleByArticleId();
  }

  fetchArticleByArticleId = () => {
    const { article_id } = this.props;
    api
      .getArticleByArticleId(article_id)
      .then(article => this.setState({ article, isLoading: false }));
  };

  render() {
    const { article, isLoading } = this.state;
    const { article_id, loggedUser } = this.props;

    return (
      <main>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <section>
            <h3>Title: {article.title}</h3>
            <p>Article: {article.body}</p>
            <p>Author: {article.author}</p>
            <p>Date: {article.created_at}</p>
            <CommentPage loggedUser={loggedUser} article_id={article_id} />
          </section>
        )}
      </main>
    );
  }
}
