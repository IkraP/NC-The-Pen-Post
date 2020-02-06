import React, { Component } from "react";
import { getAllTopics } from "../../api/apiRequest";
import TopicList from "./TopicList";

export default class Topics extends Component {
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
              return <TopicList key={topic.slug} topic={topic} />;
            })}
          </ul>
        </main>
      </React.Fragment>
    );
  }
}
