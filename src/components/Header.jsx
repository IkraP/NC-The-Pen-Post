import React, { Component } from "react";
import { Link, navigate } from "@reach/router";
import NavBar from "./NavBar";

export default class Header extends Component {
  toggleLogin = event => {
    const { id } = event.target;
    if (id === "logout") {
      this.props.getLoggedInUser("");
      navigate("/articles");
    }
  };
  render() {
    const { loggedUser } = this.props;
    const linkStyle = { textDecoration: "none", color: "inherit" };
    return (
      <header className="Header">
        <Link style={linkStyle} to="/">
          <h1 className="Header-title"></h1>
          The Pen Post
          <NavBar />
          {!loggedUser ? (
            <React.Fragment>
              <Link to="/users" style={linkStyle}>
                <button
                  id="login"
                  className="Header-btn"
                  onClick={this.toggleLogin}
                >
                  Login
                </button>
              </Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <button
                id="logout"
                className="Header-btn"
                onClick={this.toggleLogin}
              >
                Logout
              </button>
              <p>{loggedUser}</p>
            </React.Fragment>
          )}
        </Link>
      </header>
    );
  }
}
