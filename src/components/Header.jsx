import React from "react";
import { Link } from "@reach/router";

export default function Header(props) {
  return (
    <header>
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
        <h1>The News</h1>
        <p>{props.loggedUser}</p>
      </Link>
    </header>
  );
}
