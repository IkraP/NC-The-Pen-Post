import React from "react";
import { Link, navigate } from "@reach/router";

const linkStyle = { textDecoration: "none", color: "inherit" };

export default function NavBar(props) {
  const { loggedUser } = props;
  console.log(loggedUser);
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
        <button>
          <Link style={linkStyle} to="/">
            Home{" "}
          </Link>
        </button>
        <button>
          <Link style={linkStyle} to="/articles">
            Articles{" "}
          </Link>
        </button>
        <button>
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
          <button id="logout" onClick={toggleLogin}>
            Logout
            <p className="nav-user-login">{loggedUser}</p>
          </button>
        )}
      </ul>
    </nav>
  );
}
