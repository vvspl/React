import React from 'react';

class Expand extends React.Component {
  state = {
    isOpen: false,
  };

  onClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  onOpen = () => {
    this.setState({
      isOpen: true,
    });
  };
  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn">
            {this.state.isOpen ? (
              <i className="fas fa-chevron-up" onClick={this.onClose}></i>
            ) : (
              <i className="fas fa-chevron-down" onClick={this.onOpen}></i>
            )}
          </button>
        </div>
        {this.state.isOpen ? <div className="expand__content">{this.props.children}</div> : <></>}
      </div>
    );
  }
}

export default Expand;
