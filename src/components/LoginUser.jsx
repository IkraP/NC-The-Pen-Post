import React, { Component } from "react";
import * as api from "../api/apiRequest";

export default class LoginUser extends Component {
  state = {
    selectedUser: "",
    usersData: []
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
      api.getUsers(user).then(data => allUserArray.push(data));
    });
    this.setState({ usersData: allUserArray });
  };

  handleClick = event => {
    const { value } = event.target;
    this.setState({ selectedUser: value });
    const { selectedUser } = this.state;
    this.props.getLoggedInUser(selectedUser);
  };

  render() {
    const { usersData } = this.state;
    return (
      <React.Fragment>
        {usersData.map(user => {
          return (
            <section key={user.name}>
              <img
                style={{ width: "100px", height: "100px" }}
                src={user.avatar_url}
                alt={user.name}
              />
              <button value={user.username} onClick={this.handleClick}>
                {user.username}
              </button>
            </section>
          );
        })}
      </React.Fragment>
    );
  }
}
