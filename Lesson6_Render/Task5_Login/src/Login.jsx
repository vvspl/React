import React from 'react';
import { render } from 'react-dom';
import Auth from './Auth';

class Login extends React.Component {
  onLogin = () =>  { return <Auth isLogged={true}/>; }  
    
  render() {
    return <button className="btn login" onClick={this.onLogin}>Login</button>;
  }
}

export default Login;
