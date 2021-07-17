import React from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends React.Component {
  state = {
    name: '',
  };

  onInputChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    let displayUsers = this.props.users.filter(
      f => f.name.toLowerCase() === this.state.name.toLowerCase(),
    );
    if (displayUsers.length < 1) displayUsers = this.props.users;
    return (
      <div>
        <Filter name={this.state.name} onChange={this.onInputChange} count={displayUsers.length} />
        <ul className="users">
          {displayUsers.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
