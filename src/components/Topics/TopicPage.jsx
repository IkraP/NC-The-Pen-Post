import React, { Component } from "react";
import * as api from "../../api/apiRequest";
import ArticleCard from "../Articles/ArticleCard";
import { Link } from "@reach/router";
export default class TopicPage extends Component {
  state = {
    topicArticles: []
  };

  componentDidMount() {
    this.fetchArticleByTopic();
  }

  fetchArticleByTopic = () => {
    const { topic } = this.props;
    api
      .getAllArticles(topic)
      .then(topicArticles => this.setState({ topicArticles }));
  };

  render() {
    const { topic } = this.props;
    const { topicArticles } = this.state;
    return (
      <React.Fragment>
        <h3>{topic}</h3>
        <ul>
          {topicArticles.map(article => {
            return (
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`${article.article_id}`}
              >
                <ArticleCard article={article} key={article.article_id} />
              </Link>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}
