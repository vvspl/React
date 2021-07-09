import React, { Component } from 'react';

const a = <button class="picker__button picker__button_coral"></button>;

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorName: null,
    };
  }

  showColorName(e) {
    console.log(e);
    // if (e.target===a){
    this.setState({
      colorName: e,
    });
    // }
  }

  showEmpty() {
    this.setState({
      colorName: null,
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.colorName}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={e => this.showColorName('Coral')}
            onMouseOut={() => this.showEmpty()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={e => this.showColorName('Aqua')}
            onMouseOut={() => this.showEmpty()}
          ></button>
          <button className="picker__button picker__button_bisque"
          onMouseOver={e => this.showColorName('Bisque')}
          onMouseOut={() => this.showEmpty()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
