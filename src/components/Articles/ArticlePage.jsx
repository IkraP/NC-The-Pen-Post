import React, { Component } from "react";
import { getArticleByArticleId } from "../../api/apiRequest";

export default class ArticlePage extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    this.fetchArticleByArticleId();
  }

  fetchArticleByArticleId = () => {
    const { article_id } = this.props;
    getArticleByArticleId(article_id).then(article =>
      this.setState({ article })
    );
  };
  render() {
    const { article } = this.state;
    return (
      <div>
        <h3>Title: {article.title}</h3>
        <p>Article: {article.body}</p>
        <p>Author: {article.author}</p>
      </div>
    );
  }
}
