import React from 'react';

const Greet = props => {
    return (
        <div className="greeting">
        {`My name is ${props.firstName} ${props.lastName}. I'm ${props.age} years old`}
    </div>
    );
  };

  export default Greet;