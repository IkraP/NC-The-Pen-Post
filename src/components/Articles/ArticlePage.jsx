import React, { Component } from "react";
import * as api from "../../api/apiRequest";
import CommentPage from "../Comments/CommentPage";

export default class ArticlePage extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    this.fetchArticleByArticleId();
  }

  fetchArticleByArticleId = () => {
    const { article_id } = this.props;
    api
      .getArticleByArticleId(article_id)
      .then(article => this.setState({ article }));
  };

  render() {
    const { article } = this.state;
    const { article_id } = this.props;

    return (
      <div>
        <h3>Title: {article.title}</h3>
        <p>Article: {article.body}</p>
        <p>Author: {article.author}</p>
        <p>Date: {article.created_at}</p>
        <CommentPage article_id={article_id} />
      </div>
    );
  }
}
