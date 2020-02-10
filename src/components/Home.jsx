import React, { Component } from "react";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import * as api from "../api/apiRequest";
import LatestNewsArticles from "./LatestNewsArticles";

export default class Home extends Component {
  state = {
    total_count: 0,
    randomArticle: [],
    isLoading: true,
    err: null
  };

  componentDidMount() {
    this.fetchRandomArticle();
  }

  fetchRandomArticle = () => {
    api
      .articleTotalCount()
      .then(total_count => this.setState({ total_count }))
      .then(() => {
        const { total_count } = this.state;
        const newRandomNumArray = [];

        for (let i = 0; i <= 5; i++) {
          const number = Math.floor(Math.random() * total_count + 1);
          const generateNumber = newRandomNumArray.indexOf(number);
          if (generateNumber === -1) {
            newRandomNumArray.push(number);
          }
        }
        const promises = newRandomNumArray.map(article =>
          api.getArticleByArticleId(article)
        );
        return Promise.all(promises);
      })
      .then(randomArticle => {
        this.setState({ randomArticle, isLoading: false });
      })
      .catch(err => this.setState({ err }));
  };

  render() {
    const { randomArticle, isLoading, err } = this.state;
    if (err) {
      return <ErrorPage err={err} />;
    } else {
      return (
        <React.Fragment>
          {isLoading ? (
            <Loading />
          ) : (
            <section>
              <header>
                <h3 className="H-title">Latest News</h3>
              </header>
              <main className="H-card">
                {randomArticle.map(article => {
                  return (
                    <LatestNewsArticles
                      key={article.article_id}
                      article={article}
                    />
                  );
                })}
              </main>
            </section>
          )}
        </React.Fragment>
      );
    }
  }
}
