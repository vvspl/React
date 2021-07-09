import React, { Component } from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
  setBodyColor = (color, event) => {
      console.log(event);
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="colors">
        <button
          style={{
            backgroundColor: RED,
          }}
          onClick={this.setBodyColor.bind(this, RED)} // способ с привязкой контекста
          className="colors__button"
        ></button>
        <button
          style={{
            backgroundColor: GREEN,
          }}
          onClick={() => this.setBodyColor(GREEN)}  // способ через использование стрелочной ф-ции
          className="colors__button"
        ></button>
        <button
          style={{
            backgroundColor: BLUE,
          }}
          onClick={(event) => this.setBodyColor(BLUE, event)} // передача события
          className="colors__button"
        ></button>
      </div>
    );
  }
}

export default Colors;
