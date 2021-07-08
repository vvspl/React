import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Greeting firstName="Tom" lastName="Hurdy" birthDate = {new Date(1980, 6, 8)} />, rootElement);



