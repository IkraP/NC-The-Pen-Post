import React, { Component } from "react";
import { getAllTopics } from "../../api/apiRequest";
import { Link, Router } from "@reach/router";
import TopicList from "./TopicList";

export default class Topic extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    getAllTopics().then(topics => this.setState({ topics }));
  };

  render() {
    const { topics } = this.state;
    return (
      <React.Fragment>
        <header>
          <h2>Topics</h2>
        </header>
        <main>
          <ul style={{ listStyleType: "none" }}>
            {topics.map(topic => {
              return (
                <li key={topic.slug}>
                  <Link to={topic.slug}>{topic.slug}</Link>
                </li>
              );
            })}
          </ul>
        </main>
        <Router>
          <TopicList path="/" topics={topics} />
          <Topic path={":topic"} />
        </Router>
      </React.Fragment>
    );
  }
}
