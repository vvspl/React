import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  const res = new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
  return res;
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localTime: moment(getTimeWithOffset(this.props.offset)).format('LTS'),
    };

    // Do not do this way
    setInterval(() => {
      this.setState({
        localTime: moment(getTimeWithOffset(this.props.offset)).format('LTS'),
      });
    }, 1000);
  }
  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.localTime}</div>
      </div>
    );
  }
}
export default Clock;
