import React from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      {" "}
      <button>
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/home">
          {" "}
          Home{" "}
        </Link>
      </button>
      <button>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/articles"
        >
          {" "}
          Articles{" "}
        </Link>
      </button>
      <button>
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/topics">
          {" "}
          Topics{" "}
        </Link>
      </button>
    </nav>
  );
}
