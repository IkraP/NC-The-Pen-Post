import React from "react";
import { Link, navigate } from "@reach/router";

const linkStyle = { textDecoration: "none", color: "inherit" };
const toggleLogin = event => {
  const { id } = event.target;
  if (id === "logout") {
    this.props.getLoggedInUser("");
    navigate("/home");
  }
};

export default function NavBar(props) {
  const { loggedUser } = props;
  return (
    <nav>
      <button className="nav-bar-btn">
        <Link style={linkStyle} to="/">
          Home{" "}
        </Link>
      </button>
      <button className="nav-bar-btn">
        <Link style={linkStyle} to="/articles">
          Articles{" "}
        </Link>
      </button>
      <button className="nav-bar-btn">
        <Link style={linkStyle} to="/topics">
          Topics{" "}
        </Link>
      </button>
      {!loggedUser ? (
        <Link to="/users" style={linkStyle}>
          <button id="login" onClick={toggleLogin}>
            Login
          </button>
        </Link>
      ) : (
        <React.Fragment>
          <button id="logout" onClick={toggleLogin}>
            Logout
          </button>
          <p>{loggedUser}</p>
        </React.Fragment>
      )}
    </nav>
  );
}
