import React, { Component } from 'react';

class User extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          user: data,
        });
      });
  };

  render() {
    // const { user } = this.state; // можно заменить обращение типа this.state.user на user
    if (!this.state.user) {
      return null;
    }

    // const { avatar_url, name, location } = user; - можно заменить обращение типа user.location и т.п. на просто location
    // 

    return (
      <div className="user">
        <img alt="User Avatar" src={this.state.user.avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{this.state.user.name}</span>

          <span className="user__location">{this.state.user.location}</span>
        </div>
      </div>
    );
  }
}

export default User;
