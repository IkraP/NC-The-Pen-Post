import React, { Component } from "react";
import ArticleCard from "./Articles/ArticleCard";
import { getAllArticles } from "../api/apiRequest";

export default class Homepage extends Component {
  state = {
    allArticles: []
  };

  componentDidMount() {
    this.fetchAllArticles();
  }

  fetchAllArticles = () => {
    getAllArticles().then(allArticles => this.setState({ allArticles }));
  };

  render() {
    const { allArticles } = this.state;
    return (
      <main>
        <ul>
          {allArticles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </main>
    );
  }
}
