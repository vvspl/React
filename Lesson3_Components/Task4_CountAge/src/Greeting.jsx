import React from 'react';

const Greet = props => {
    return (
        <div className="greeting">
        {`My name is ${props.firstName} ${props.lastName}. I'm ${Math.floor((new Date - props.birthDate)/(1000*60*60*24*365))} years old`}
    </div>
    );
  };

  export default Greet;