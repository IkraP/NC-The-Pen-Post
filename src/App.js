import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";

import Topics from "./components/Topics/Topics";
import TopicPage from "./components/Topics/TopicPage";
import LoginUser from "./components/LoginUser";
import ArticlePage from "./components/Articles/ArticlePage";
import Home from "./components/Home";
import Articles from "./components/Articles";

export default class App extends React.Component {
  state = {
    loggedUser: null
  };

  getLoggedInUser = selectedUser => {
    this.setState({ loggedUser: selectedUser });
  };

  render() {
    const { loggedUser } = this.state;

    return (
      <React.Fragment>
        <header>
          <Header loggedUser={loggedUser} />
          <NavBar loggedUser={loggedUser} />
        </header>
        <Router>
          <LoginUser path="/users" getLoggedInUser={this.getLoggedInUser} />
          <Home path="/home" loggedUser={loggedUser} />
          <Articles path="/articles" />
          <ArticlePage path="/articles/:article_id" loggedUser={loggedUser} />
          <ArticlePage
            path="topics/:topic/:article_id"
            loggedUser={loggedUser}
          />
          <Topics path="/topics" />
          <TopicPage path="/topics/:topic" />
        </Router>
      </React.Fragment>
    );
  }
}
