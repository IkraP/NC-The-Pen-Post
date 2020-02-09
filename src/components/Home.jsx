import React, { Component } from "react";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import * as api from "../api/apiRequest";
// import { Link } from "@reach/router";

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
          newRandomNumArray.push(Math.floor(Math.random() * total_count + 1));
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
              <header className="H-title">
                <h3 className="H-title-content">Latest News</h3>
              </header>
              <main className="H-random-article">
                {randomArticle.map(article => {
                  return (
                    <ul key={article.article_id}>
                      <li>{article.title}</li>
                    </ul>
                  );
                })}

                {/* <p className="H-topic">{randomArticle.topic}</p>
                <Link
                  to={`/articles/${randomArticle.article_id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <p>{randomArticle.title}</p>
                </Link>
                <p>{randomArticle.author}</p>
                <p>comments:{randomArticle.comment_count}</p> */}
              </main>
            </section>
          )}
        </React.Fragment>
      );
    }
  }
}
