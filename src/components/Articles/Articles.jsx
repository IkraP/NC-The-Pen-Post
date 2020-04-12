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
    total_count: 0,
  };

  componentDidMount() {
    this.fetchAllArticles();
  }

  fetchAllArticles = () => {
    const getAllArticles = api
      .getAllArticles({})
      .then((allArticles) => this.setState({ allArticles, isLoading: false }));

    const totalCount = api
      .articleTotalCount()
      .then((total_count) => this.setState({ total_count }));

    Promise.all([getAllArticles, totalCount]).catch((err) =>
      this.setState({ err })
    );
  };

  updateArticles = (sortedArticles) => {
    this.setState({
      allArticles: sortedArticles,
    });
  };

  changePage = () => {
    this.setState((currentState) => {
      return { page: currentState.page + 1 };
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { page } = this.state;
    if (prevState.page !== page) {
      api
        .getAllArticles({ page })
        .then((allArticles) => this.setState({ allArticles }))
        .catch((err) => this.setState({ err }));
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
          <h1 className="articles-title">Articles</h1>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="articles-page-sorting">
              <Sorting page={page} />
              <React.Fragment>
                <div>
                  {page !== totalPages ? (
                    <button
                      className="article-pages"
                      disabled={page === totalPages ? true : false}
                      onClick={this.changePage}
                    >
                      Page {page}
                    </button>
                  ) : (
                    <button
                      className="article-pages"
                      onClick={() => this.setState({ page: 1 })}
                    >
                      back to first page
                    </button>
                  )}
                </div>
              </React.Fragment>

              <ul className="article-wrapper">
                {allArticles.map((article) => {
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
