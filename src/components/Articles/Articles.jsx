import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../../api/apiRequest";
import Sorting from "../Sorting";
import ErrorPage from "../ErrorPage";

export default class Articles extends Component {
  state = {
    allArticles: [],
    isLoading: true,
    err: null
  };

  componentDidMount() {
    this.fetchAllArticles();
  }

  fetchAllArticles = () => {
    api
      .getAllArticles()
      .then(allArticles => this.setState({ allArticles, isLoading: false }))
      .catch(err => this.setState({ err }));
  };

  updateArticles = sortedArticles => {
    this.setState({
      allArticles: sortedArticles
    });
  };

  render() {
    const { allArticles, isLoading, err } = this.state;
    const { loggedUser } = this.props;
    if (err) {
      return <ErrorPage err={err} />;
    } else {
      return (
        <main>
          <h1>Articles</h1>
          <Sorting updateArticles={this.updateArticles} />
          {isLoading ? (
            <p>..Loading</p>
          ) : (
            <ul>
              {allArticles.map(article => {
                return (
                  <ArticleCard
                    loggedUser={loggedUser}
                    key={article.article_id}
                    article={article}
                  />
                );
              })}
            </ul>
          )}
        </main>
      );
    }
  }
}
