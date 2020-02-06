import React, { Component } from "react";
import { Link, navigate } from "@reach/router";

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
    console.log(loggedUser);
    return (
      <header>
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/home">
          <h1>The Pen Post</h1>
        </Link>
        {/* toggle login and logout */}
        {!loggedUser ? (
          <div>
            <Link to="/users">
              <button id="login" onClick={this.toggleLogin}>
                Login
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <button id="logout" onClick={this.toggleLogin}>
              Logout
            </button>
            <p>{loggedUser}</p>
          </div>
        )}
      </header>
    );
  }
}
