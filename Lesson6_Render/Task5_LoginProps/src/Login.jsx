/* eslint-disable arrow-body-style */
import React from 'react';
// Component
// input: props:object
// output: jsx
const Login = (props) => {
  console.log('Props: ', props);
  return (
    <button className="login btn" onClick={props.onLogin}>
      Login
    </button>
  );
};

export default Login;
