import React, { Component } from "react";
import * as api from "../api/apiRequest";

export default class Sorting extends Component {
  state = {
    sort_by: "",
    order: ""
  };

  handleOrder = event => {
    const { value } = event.target;
    api.getAllArticles(null, value).then(sortedArticles => {
      this.setState({ order: "" });
      this.props.updateArticles(sortedArticles);
    });
  };

  render() {
    console.log(this.state.order);
    return (
      <React.Fragment>
        <form>
          <label>Sort articles by:</label>
          <select onChange={this.handleOrder}>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>
        </form>

        {/* <button id="asc" onClick={this.handleOrder}>
          ASC
        </button>
        <button id="desc" onClick={this.handleOrder}>
          DESC
        </button> */}
      </React.Fragment>
    );
  }
}
