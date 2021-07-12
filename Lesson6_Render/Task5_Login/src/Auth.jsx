import React from 'react';
import { render } from 'react-dom';
import Login from './Login';
import Spinner from './Spinner';
import Logout from './Logout';

class Auth extends React.Component {
  state = {
    isLogged: false,
    spinOn: true,
  };

  toggle = (log, spin) => {
    this.setState({ isLogged: log, spinOn: spin });
  };


  render() {
    console.log(this.state.isLogged, this.state.spinOn, );
    if (!this.state.isLogged) return <Login toggle={this.toggle} />;
    else if (this.state.spinOn) {
      return <Spinner size={30} />;}
      return <Logout toggle={this.toggle} />;
  }
}

export default Auth;
