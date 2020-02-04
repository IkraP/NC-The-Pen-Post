import React from "react";
import { Link } from "@reach/router";

export default function Header() {
  return (
    <header>
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
        <h1>The News</h1>
      </Link>
    </header>
  );
}
