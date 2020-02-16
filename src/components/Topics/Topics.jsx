import React, { Component } from "react";
import { getAllTopics } from "../../api/apiRequest";
import TopicList from "./TopicList";
import ErrorPage from "../ErrorPage";
import Loading from "../Loading";

export default class Topics extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: null
  };

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    getAllTopics()
      .then(topics => this.setState({ topics, isLoading: false }))
      .catch(err => this.setState(err));
  };

  render() {
    const { topics, isLoading, err } = this.state;
    if (err) {
      return <ErrorPage err={err} />;
    } else {
      return (
        <React.Fragment>
          <header>
            <h2 className="topic-title">Topics</h2>
          </header>
          {isLoading ? (
            <Loading />
          ) : (
            <ul className="topic-list">
              {topics.map(topic => {
                return <TopicList key={topic.slug} topic={topic} />;
              })}
            </ul>
          )}
        </React.Fragment>
      );
    }
  }
}
