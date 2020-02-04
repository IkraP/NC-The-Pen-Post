import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage";
import Topics from "./components/Topics/Topics";
import TopicPage from "./components/Topics/TopicPage";
import ArticlePage from "./components/Articles/ArticlePage";

export default function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
        <NavBar />
      </header>
      <Router>
        <Homepage path="/" />
        <ArticlePage path="/:article_id" />
        <Topics path="/topics" />
        <TopicPage path="/topics/:topic" />
      </Router>
    </React.Fragment>
  );
}
