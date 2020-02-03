import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage";
import Topic from "./components/Topics/Topics";

export default function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
        <NavBar />
      </header>
      <Router>
        <Homepage path="/" />
        <Topic path="/topics/*" />
      </Router>
    </React.Fragment>
  );
}
