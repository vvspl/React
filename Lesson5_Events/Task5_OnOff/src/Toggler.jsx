import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: 'Off',
    };
  }

  changeToggle() {
    if (this.state.toggle === 'Off') {
      this.setState({
        toggle: 'On',
      });
    }
    else {
        this.setState({
            toggle: 'Off',
          }); 
    }
  }

  render() {
    return (
      <div className="toggler" onClick={() => this.changeToggle()}>
        {this.state.toggle}
      </div>
    );
  }
}

export default Toggler;
