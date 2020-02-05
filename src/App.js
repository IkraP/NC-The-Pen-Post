import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import Articles from "./components/Articles/Articles";
import Topics from "./components/Topics/Topics";
import TopicPage from "./components/Topics/TopicPage";
import ArticlePage from "./components/Articles/ArticlePage";
import LoginUser from "./components/LoginUser";

export default class App extends React.Component {
  state = {
    getLoggedInUser: ""
  };

  getLoggedInUser = selectedUser => {
    this.setState({ getLoggedInUser: selectedUser });
  };

  render() {
    console.log(this.state.getLoggedInUser);
    return (
      <React.Fragment>
        <header>
          <Header />
          <NavBar />
        </header>
        <Router>
          <LoginUser path="/users" getLoggedInUser={this.getLoggedInUser} />
          <Articles path="/articles" />
          <ArticlePage path="/:article_id" />
          <ArticlePage path="topics/:topic/:article_id" />
          <Topics path="/topics" />
          <TopicPage path="/topics/:topic" />
        </Router>
      </React.Fragment>
    );
  }
}
