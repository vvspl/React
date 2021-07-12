import React from 'react';

class Login extends React.Component {

  onLogin(){
    this.props.toggle(true, true);
      setTimeout(() => {
        this.props.toggle(true, false);
        }, 2000);
    };

  render() {
    return (
      <button
        className="login btn"
        onClick={()=>this.onLogin()}
      >
        Login
      </button>
    );
  }
}

export default Login;
