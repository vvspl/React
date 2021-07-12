import React from 'react';
import Auth from './Auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  onLogin (){
    console.log('onLoginExec:', this.props.func);
    this.props.func(true);
  };

  render() {
  //   return (
  //     <button
  //       className="btn login"
  //       onClick={() => {
  //         this.props.updateData(this.state.isLogged);
  //       }}
  //     >
  //       Login
  //     </button>
  //   );
    return <button className="btn login" onClick={this.onLogin()}>Login</button>;
  }
}

export default Login;
