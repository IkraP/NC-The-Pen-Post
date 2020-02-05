import React, { Component } from "react";
import ArticleCard from "./Articles/ArticleCard";
import * as api from "../api/apiRequest";
import Sorting from "./Sorting";

export default class Homepage extends Component {
  state = {
    allArticles: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchAllArticles();
  }

  fetchAllArticles = () => {
    api
      .getAllArticles()
      .then(allArticles => this.setState({ allArticles, isLoading: false }));
  };

  updateArticles = sortedArticles => {
    this.setState({
      allArticles: sortedArticles
    });
  };

  render() {
    const { allArticles, isLoading } = this.state;
    return (
      <main>
        <h1>Articles</h1>
        <Sorting updateArticles={this.updateArticles} />
        {isLoading ? (
          <p>..Loading</p>
        ) : (
          <ul>
            {allArticles.map(article => {
              return <ArticleCard key={article.article_id} article={article} />;
            })}
          </ul>
        )}
      </main>
    );
  }
}
