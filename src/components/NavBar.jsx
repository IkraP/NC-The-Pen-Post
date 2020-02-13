import React from "react";
import { Link, navigate } from "@reach/router";

const linkStyle = { textDecoration: "none", color: "inherit" };

export default function NavBar(props) {
  const { loggedUser } = props;
  const toggleLogin = event => {
    const { id } = event.target;
    if (id === "logout") {
      props.getLoggedInUser("");
      navigate("/home");
    }
  };
  return (
    <nav className="nav-bar">
      <ul className="nav-bar-ul">
        <li>
          <Link style={linkStyle} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={linkStyle} to="/articles">
            Articles
          </Link>
        </li>
        <li>
          <Link style={linkStyle} to="/topics">
            Topics
          </Link>
        </li>
        {!loggedUser ? (
          <li id="login" onClick={toggleLogin}>
            <Link to="/users" style={linkStyle}>
              {" "}
              Login
            </Link>
          </li>
        ) : (
          <li id="logout" onClick={toggleLogin}>
            Logout
          </li>
        )}
        <p className="nav-user-login">{loggedUser}</p>
      </ul>
    </nav>
  );
}
