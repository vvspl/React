import React from 'react';

class Spinner extends React.Component {
    constructor(props){
        super(props);
    }

  render() {
    return <div className="spinner" style={{height:this.props.size, width: this.props.size }}></div>;
  }
}

export default Spinner;