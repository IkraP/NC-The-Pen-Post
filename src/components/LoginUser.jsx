import React, { Component } from "react";
import { navigate } from "@reach/router";
import * as api from "../api/apiRequest";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";

export default class LoginUser extends Component {
  state = {
    usersData: [],
    isLoading: true,
    err: null
  };

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
        .then(() => this.setState({ isLoading: false }))
        .catch(err => this.setState({ err }));
    });
    this.setState({ usersData: allUserArray });
  };

  handleClick = event => {
    const { value } = event.target;

    this.props.getLoggedInUser(value);
    navigate("/articles");
  };

  render() {
    const { usersData, isLoading, err } = this.state;
    if (err) {
      return <ErrorPage err={err} />;
    } else {
      return (
        <React.Fragment>
          <h2 className="LU-title">Users:</h2>
          {isLoading ? (
            <Loading />
          ) : (
            <section className="LD-container">
              {usersData.map(user => {
                return (
                  <section className="LD-content" key={user.name}>
                    <img
                      className="LD-img"
                      src={user.avatar_url}
                      alt={user.name}
                    />
                    <button
                      className="LD-user"
                      value={user.username}
                      onClick={this.handleClick}
                    >
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
}
