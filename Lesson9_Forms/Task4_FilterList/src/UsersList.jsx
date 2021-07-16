import React from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx'

class UsersList extends React.Component {
  state = {
    name: '',
  };

  onChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    console.log(this.props.users);
    return (
      <div>
        <Filter name={this.state.name} user ={this.props.users}/>
        <div className="filter">
          <span className="filter__count">5</span>
          <input type="text" className="filter__input" value={this.state.name} onChange={this.onChange} />
        </div>
        <ul className="users">
          {this.props.users.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
