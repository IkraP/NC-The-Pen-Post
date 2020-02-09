import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../../api/apiRequest";
import Sorting from "../Sorting";
import ErrorPage from "../ErrorPage";
import Loading from "../Loading";

export default class Articles extends Component {
  state = {
    allArticles: [],
    isLoading: true,
    err: null,
    page: 1,
    total_count: 0
  };

  componentDidMount() {
    this.fetchAllArticles();
  }

  fetchAllArticles = () => {
    const getAllArticles = api
      .getAllArticles({})
      .then(allArticles => this.setState({ allArticles, isLoading: false }));

    const totalCount = api
      .articleTotalCount()
      .then(total_count => this.setState({ total_count }));

    Promise.all([getAllArticles, totalCount]).catch(err =>
      this.setState({ err })
    );
  };

  updateArticles = sortedArticles => {
    this.setState({
      allArticles: sortedArticles
    });
  };

  changePage = () => {
    this.setState(currentState => {
      return { page: currentState.page + 1 };
    });
  };
  handleFirstPage = () => {
    this.setState(currentState => {
      return { page: 1 };
    });
  };
  componentDidUpdate = (prevProps, prevState) => {
    const { page } = this.state;
    if (prevState.page !== page) {
      api
        .getAllArticles({ page })
        .then(allArticles => this.setState({ allArticles }))
        .catch(err => this.setState({ err }));
    }
  };

  render() {
    const { allArticles, isLoading, err, total_count, page } = this.state;
    const { loggedUser } = this.props;
    const totalPages = Math.ceil(total_count / 10);

    if (err) {
      return <ErrorPage err={err} />;
    } else {
      return (
        <main>
          <h1 className="articleCard-title">Articles</h1>
          <Sorting updateArticles={this.updateArticles} page={page} />
          {isLoading ? (
            <Loading />
          ) : (
            <div>
              {page !== totalPages ? (
                <button
                  disabled={page === totalPages ? true : false}
                  onClick={this.changePage}
                >
                  Page {page}
                </button>
              ) : (
                <button onClick={this.handleFirstPage}>
                  back to first page
                </button>
              )}

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
            </div>
          )}
        </main>
      );
    }
  }
}
