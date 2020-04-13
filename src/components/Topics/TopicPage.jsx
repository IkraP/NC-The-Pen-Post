import React, { Component } from "react";
import * as api from "../../api/apiRequest";
import ArticleCard from "../Articles/ArticleCard";
import ErrorPage from "../ErrorPage";
import Sorting from "../Sorting";
import Loading from "../Loading";

export default class TopicPage extends Component {
  state = {
    topicArticles: [],
    isLoading: true,
    err: null,
    page: 1,
    sort_by: "date",
  };

  componentDidMount() {
    this.fetchArticleByTopic();
  }

  fetchArticleByTopic = () => {
    const { topic } = this.props;
    const { page } = this.state;

    api
      .getAllArticles({ topic, page })
      .then((topicArticles) => {
        this.setState({ topicArticles, isLoading: false });
      })
      .catch((err) => this.setState({ err }));
  };

  updateArticles = (sort_by) => {
    this.setState({ sort_by });
  };

  changePage = () => {
    this.setState((currentState) => {
      return { page: currentState.page + 1 };
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { page, sort_by } = this.state;
    const { topic } = this.props;
    if (prevState.page !== page || prevState.sort_by !== sort_by) {
      api
        .getAllArticles({ topic, page, sort_by })
        .then((topicArticles) => this.setState({ topicArticles }))
        .catch((err) => this.setState({ err }));
    }
  };

  render() {
    const { topic, loggedUser } = this.props;
    const { topicArticles, err, page, isLoading } = this.state;
    const totalPages = topicArticles.length < 10;
    if (err) {
      return <ErrorPage err={err} />;
    } else {
      return (
        <main>
          {isLoading ? (
            <Loading />
          ) : (
            <React.Fragment>
              <h3 className="topic-title">{topic}</h3>
              <Sorting updateArticles={this.updateArticles} />
              <div>
                {!totalPages ? (
                  <button className="topic-pages" onClick={this.changePage}>
                    Page {page}
                  </button>
                ) : (
                  <button
                    className="topic-pages"
                    onClick={() => this.setState({ page: 1 })}
                  >
                    Page {page}
                  </button>
                )}
              </div>

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
          )}
        </main>
      );
    }
  }
}
