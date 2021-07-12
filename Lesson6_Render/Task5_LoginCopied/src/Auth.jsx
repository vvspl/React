import React from 'react';
import { render } from 'react-dom';
import Login from './Login';
import Spinner from './Spinner';
import Logout from './Logout';

class Auth extends React.Component {
  constructor(props) {
    console.log('Props:', props);
    super(props);
    this.state = {
      isLogged: false,
    };
    console.log('isLogged: ', this.state.isLogged);
  }

  toggle = (value) => {
    this.setState({ isLogged: value });
 }

  render() {
    if (!this.isLogged) return <Login func={this.toggle} />;
    else {
      setTimeout(() => <Spinner size={30} />, 2000);
      return <Logout />;
    }
  }
}

export default Auth;
