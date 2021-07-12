import React from 'react';
import ReactDOM from 'react-dom';
import NumbersList from './NumbersList.jsx'

const rootElement = document.querySelector('#root');

const numbers = [1, 2 , 4, 5, 6];

ReactDOM.render(<NumbersList numbers={numbers}/> , rootElement);