import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    onlineStatus: 'online',
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
      onlineStatus: 'online',
    });
  }

  onDisconnected = () => {
    console.log('disconnected');
    this.setState({
      onlineStatus: 'offline',
    });
  }

  render() {
      console.log(this.state.onlineStatus);
    if (this.state.onlineStatus==='online') return <div className="status">Online</div>;
    return <div className="status status_offline">Offline</div>;
  }
}

export default ConnectionStatus;
