import React, { useState } from 'react';
import Clock from './Clock.jsx';

const App =()=> {
  const[visible, setVisibility]=useState(true);

 const toggle = () => {
    setVisibility(!visible);
  }

    return (
      <>
        <button onClick={toggle}>Toggle</button>
        <div>{visible && <Clock location="London" offset={0} />}</div>
        <div>{visible && <Clock location="Kyiv" offset={2} />}</div>
        <div>{visible && <Clock location="New York" offset={-5} />}</div>
      </>
    );
}
export default App;
