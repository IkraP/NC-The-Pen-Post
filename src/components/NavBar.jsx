import React from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <nav>
      <button>
        <Link to="/home"> Home </Link>
      </button>
      <button>
        <Link to="/a"> Home </Link>
      </button>
      <button>
        <Link to="/users"> Users </Link>
      </button>

      <button>
        <Link to="/topics"> Topics </Link>
      </button>
    </nav>
  );
}
