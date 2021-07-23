import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [connection, setConnection] = useState(true);

  useEffect(() => {
    window.addEventListener('online', onConnected);
    window.addEventListener('offline', onDisconnected);

    return () => {
      window.removeEventListener('online', onConnected);
      window.removeEventListener('offline', onDisconnected);
    };
  }, []);

  const onConnected = () => {
    setConnection(true);
  };

  const onDisconnected = () => {
    setConnection(false);
  };

  if (connection) return <div className="status">online</div>;
  return <div className="status status_offline">offline</div>;
};

export default ConnectionStatus;
