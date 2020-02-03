import React, { Component } from "react";
import ArticleCard from "./Articles/ArticleCard";
import { getAllArticles } from "../api/apiRequest";

export default class Homepage extends Component {
  state = {
    allArticles: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchAllArticles();
  }

  fetchAllArticles = () => {
    getAllArticles().then(allArticles =>
      this.setState({ allArticles, isLoading: false })
    );
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
              return <ArticleCard key={article.article_id} article={article} />;
            })}
          </ul>
        )}
      </main>
    );
  }
}
