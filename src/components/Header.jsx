import React from "react";
import { Link } from "@reach/router";
import NavBar from "./NavBar";

export default function Header(props) {
  const linkStyle = { textDecoration: "none", color: "inherit" };
  const { loggedUser, getLoggedInUser } = props;
  return (
    <header className="Header">
      <Link style={linkStyle} to="/">
        <h1 className="Header-title">The Pen Post</h1>
      </Link>
      <NavBar
        className="nav-bar"
        getLoggedInUser={getLoggedInUser}
        loggedUser={loggedUser}
      />
    </header>
  );
}
