import React from "react";
import { Link } from "@reach/router";
import NavBar from "./NavBar";

export default function Header(props) {
  const linkStyle = { textDecoration: "none", color: "inherit" };
  const { loggedUser, getLoggedInUser } = props;
  return (
    <header className="Header">
      <Link style={linkStyle} to="/">
        <h1 className="Header-title">
          The Pen Post{" "}
          <img
            className="Header-logo"
            src="https://i.ibb.co/Y3GpvzK/Asset-4-2x-100.jpg"
            alt="The Pen Post logo"
          ></img>
        </h1>
      </Link>
      <NavBar
        className="nav-bar"
        getLoggedInUser={getLoggedInUser}
        loggedUser={loggedUser}
      />
    </header>
  );
}
