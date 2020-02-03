import React from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/topics"> Topics </Link>
    </nav>
  );
}
