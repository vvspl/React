import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    onlineStatus: true,
  };

  componentDidMount() {
    // if (navigator.onLine) console.log('yes');  // option2
    window.addEventListener('online', this.onConnected);
    window.addEventListener('offline', this.onDisconnected);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onConnected);
    window.removeEventListener('offline', this.onDisconnected);
  }

  onConnected = () => {
      console.log('connected');
    this.setState({
      onlineStatus: true,
    });
  }

  onDisconnected = () => {
    console.log('disconnected');
    this.setState({
      onlineStatus: false,
    });
  }

  render() {
      console.log(this.state.onlineStatus);
    if (this.state.onlineStatus) return <div className="status">online</div>;
    return <div className="status status_offline">offline</div>;
  }
}

export default ConnectionStatus;
