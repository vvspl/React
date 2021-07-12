import React from 'react';

class Logout extends React.Component {
  onLogout = () => { console.log('hallo')};
  render() {
    return <button className="btn" onClick={this.onLogin}>Logout</button>;
  }
}

export default Logout;