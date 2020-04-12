import React, { Component } from "react";
import ErrorPage from "../components/ErrorPage";

export default class Sorting extends Component {
  state = {
    err: null,
  };

  handleSortBy = (event) => {
    const sort_by = event.target.value;
    console.log(sort_by);
  };

  render() {
    const { err } = this.state;
    if (err) {
      return <ErrorPage err={err} />;
    } else {
      return (
        <form className="articles-sorting">
          <label>Sort articles by: </label>
          <select onChange={this.handleSortBy}>
            <option value="date">date</option>
            <option value="comment_count">comments</option>
            <option value="votes">votes</option>
          </select>
        </form>
      );
    }
  }
}
