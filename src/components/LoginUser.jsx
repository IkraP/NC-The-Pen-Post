import React, { Component } from "react";
import { navigate } from "@reach/router";
import * as api from "../api/apiRequest";

export default class LoginUser extends Component {
  state = {
    usersData: [],
    isLoading: true
  };
  // When page is loaded all the info for users is shown
  componentDidMount() {
    this.fetchUserProfile();
  }

  fetchUserProfile = () => {
    const users = [
      "tickle122",
      "grumpy19",
      "happyamy2016",
      "cooljmessy",
      "weegembump",
      "jessjelly"
    ];
    let allUserArray = [];
    users.forEach(user => {
      api
        .getUsers(user)
        .then(data => allUserArray.push(data))
        .then(() => this.setState({ isLoading: false }));
    });
    this.setState({ usersData: allUserArray });
  };

  handleClick = event => {
    const { value } = event.target;

    this.props.getLoggedInUser(value);
    navigate("/articles");
  };

  render() {
    const { usersData, isLoading } = this.state;

    return (
      <React.Fragment>
        <h2>Users:</h2>
        {isLoading ? (
          <p>Loading... </p>
        ) : (
          <section>
            {usersData.map(user => {
              return (
                <section key={user.name}>
                  <img
                    style={{
                      width: "70px",
                      height: "100px"
                    }}
                    src={user.avatar_url}
                    alt={user.name}
                  />
                  <button value={user.username} onClick={this.handleClick}>
                    {user.username}
                  </button>
                </section>
              );
            })}
          </section>
        )}
      </React.Fragment>
    );
  }
}
