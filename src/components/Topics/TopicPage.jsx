import React, { Component } from "react";
import { getAllArticles } from "../../api/apiRequest";
import ArticleCard from "../Articles/ArticleCard";

export default class TopicPage extends Component {
  state = {
    topicArticles: []
  };

  componentDidMount() {
    this.fetchArticleByTopic();
  }

  fetchArticleByTopic = () => {
    const { topic } = this.props;
    getAllArticles(topic).then(topicArticles =>
      this.setState({ topicArticles })
    );
  };

  render() {
    const { topic } = this.props;
    const { topicArticles } = this.state;

    return (
      <React.Fragment>
        <h3>{topic}</h3>

        <ul>
          {topicArticles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </React.Fragment>
    );
  }
}
