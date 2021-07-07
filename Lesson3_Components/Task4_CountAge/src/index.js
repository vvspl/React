import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Greeting firstName="Tom" lastName="Hurdy" age = {17} />, rootElement);



