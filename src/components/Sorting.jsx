import React, { Component } from "react";
import * as api from "../api/apiRequest";

export default class Sorting extends Component {
  state = {
    sort_by: "",
    order: "",
    err: null
  };

  //handling order by asc or desc function
  handleOrderSort = event => {
    const { value } = event.target;
    api
      .getAllArticles(null, value)
      .then(sortedArticles => {
        this.setState({ order: "" });
        this.props.updateArticles(sortedArticles);
      })
      .catch(err => this.setState({ err }));
  };

  //handling sort_by by date, comment, votes function

  handleSortBy = event => {
    const { value } = event.target;
    api
      .getAllArticles(null, null, value)
      .then(sortedArticles => {
        this.setState({ sort_by: "" });
        this.props.updateArticles(sortedArticles);
      })
      .catch(err => this.setState({ err }));
  };

  render() {
    const { err } = this.state;
    if (err) {
      return <ErrorPage err={err} />;
    } else {
      return (
        <React.Fragment>
          <form>
            <label>Sort articles by: </label>
            <select onChange={this.handleOrderSort}>
              <option value="desc">desc</option>
              <option value="asc">asc</option>
            </select>
          </form>
          <form>
            <label>Sort articles by: </label>
            <select onChange={this.handleSortBy}>
              <option value="date">date</option>
              <option value="comment_count">number of comments</option>
              <option value="votes">votes</option>
            </select>
          </form>
        </React.Fragment>
      );
    }
  }
}
