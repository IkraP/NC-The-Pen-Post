import React from "react";
import { Link } from "@reach/router";

export default function Header(props) {
  return (
    <header>
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/home">
        <h1>The Pen Post</h1>
        <p>{props.loggedUser}</p>
      </Link>
      <Link to="/users">
        <button>Log in</button>
      </Link>
    </header>
  );
}
