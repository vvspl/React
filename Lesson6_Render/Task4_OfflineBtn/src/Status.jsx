import React, { Component } from 'react';
import Offline from './Offline';
import Online from './Online';

class Status extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    if (this.props.isOnline) return <Online />;
    else return <Offline />;
  }
}

export default Status;
