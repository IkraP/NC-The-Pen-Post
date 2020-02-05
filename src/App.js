import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import Articles from "./components/Articles/Articles";
import Topics from "./components/Topics/Topics";
import TopicPage from "./components/Topics/TopicPage";

import LoginUser from "./components/LoginUser";
import EachArticlePage from "./components/Articles/EachArticlePage";

export default class App extends React.Component {
  state = {
    getLoggedInUser: null
  };

  getLoggedInUser = selectedUser => {
    this.setState({ getLoggedInUser: selectedUser });
  };

  render() {
    const { getLoggedInUser } = this.state;
    return (
      <React.Fragment>
        <header>
          <Header loggedUser={getLoggedInUser} />
          <NavBar loggedUser={getLoggedInUser} />
        </header>
        <Router>
          <LoginUser path="/users" getLoggedInUser={this.getLoggedInUser} />
          <Articles path="/articles" loggedUser={getLoggedInUser} />
          <EachArticlePage path="/:article_id" />
          <EachArticlePage path="topics/:topic/:article_id" />
          <Topics path="/topics" />
          <TopicPage path="/topics/:topic" />
        </Router>
      </React.Fragment>
    );
  }
}
