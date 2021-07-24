import React, { useState, useEffect } from 'react';
import './index.scss';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = (props) => {
  let initTime = moment(getTimeWithOffset(props.offset)).format('LTS');
  let [time, setTime]=useState(initTime);

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(time = moment(getTimeWithOffset(props.offset)).format('LTS'));
    }, 1000);

    return () =>
      clearInterval(interval);
  }, []);


    return (
      <div className="clock">
        <div className="clock__location">{props.location}</div>
        <div className="clock__time">{time}</div>
      </div>
    );
}

export default Clock;
