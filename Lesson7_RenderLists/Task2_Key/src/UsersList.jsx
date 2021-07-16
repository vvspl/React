import React from 'react';
import User from './User.jsx';

class UsersList extends React.Component {
  state = {
    sorting: null,
  };

  toggleSorting = () => {
    const newSorting = this.state.sorting === 'asc' ? 'desc' : 'asc';
    this.setState({
      sorting: newSorting,
    });
  };

  render() {

      let userList;
      if (this.state.sorting) {
          userList = this.props.users.slice().sort((a, b) =>
          this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age
          );
      } else {
          userList = this.props.users;
      }
    
    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || '-'}
        </button>
        <ul className="users">
          {/* {users.map(user=><User key={user.id} name={user.name} age={user.age}/>  альтернативная запись */}
          {userList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;