import React, { Component } from "react";
import * as api from "../../api/apiRequest";
import ArticleCard from "../Articles/ArticleCard";
import ErrorPage from "../ErrorPage";

export default class TopicPage extends Component {
  state = {
    topicArticles: [],
    err: null,
  };

  componentDidMount() {
    this.fetchArticleByTopic();
  }

  fetchArticleByTopic = () => {
    const { topic } = this.props;
    api
      .getAllArticles({ topic })
      .then((topicArticles) => this.setState({ topicArticles }))
      .catch((err) => this.setState({ err }));
  };

  render() {
    const { topic, loggedUser } = this.props;
    const { topicArticles, err } = this.state;
    console.log(topicArticles);
    if (err) {
      return <ErrorPage err={err} />;
    } else {
      return (
        <React.Fragment>
          <h3 className="topic-title">{topic}</h3>
          <ul>
            {topicArticles.map((article) => {
              return (
                <ArticleCard
                  loggedUser={loggedUser}
                  article={article}
                  key={article.article_id}
                />
              );
            })}
          </ul>
        </React.Fragment>
      );
    }
  }
}
