import React from 'react';

class Logout extends React.Component {
  onLogout(){
    this.props.toggle(false, true);
}
  render() {
    return <button className="logout btn" onClick={()=>this.onLogout()}>Logout</button>;
  }
}

export default Logout;