/* eslint-disable arrow-body-style */
import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

// algo
// 1/ Show login by default
// 2. show spinner fo 2 sec after login click
// 3. show logout
// 4. show login after logout click

class App extends React.Component {
  state = {
    isLoggedIn: false,
    isLogging: false,
  };

  onLogin = () => {
    console.log(this);
    this.setState({
      isLoggedIn: true,
    });

    // input : func, ms
    // output: undefined
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isLogging: true,
      });
    }, 2000);
  }

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
      isLogging: false,
    });
  }

  render() {
    if (!this.state.isLoggedIn) return <Login onLogin={this.onLogin} />;
    if (this.state.isLogging) return <Logout onLogout={this.onLogout} />;
    return <Spinner size={20} />;
    
  }
}

export default App;
