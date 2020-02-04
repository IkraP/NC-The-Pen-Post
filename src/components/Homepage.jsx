import React, { Component } from "react";
import ArticleCard from "./Articles/ArticleCard";
import * as api from "../api/apiRequest";
import { Link } from "@reach/router";

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

  render() {
    const { allArticles, isLoading } = this.state;

    return (
      <main>
        <h1>Articles</h1>
        {isLoading ? (
          <p>..Loading</p>
        ) : (
          <ul>
            {allArticles.map(article => {
              return (
                <Link
                  to={`${article.article_id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ArticleCard key={article.article_id} article={article} />
                </Link>
              );
            })}
          </ul>
        )}
      </main>
    );
  }
}
