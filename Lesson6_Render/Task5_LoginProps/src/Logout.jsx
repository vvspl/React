/* eslint-disable arrow-body-style */
import React from 'react';

const Logout = props => {
    console.log("Props: ", props);
       return <button className='logout btn' onClick={props.onLogout}>Logout</button>
}

export default Logout;