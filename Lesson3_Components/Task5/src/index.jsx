import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile.jsx';

export const userData = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1991-01-17T11:11:11.819Z',
    birthPlace: 'London'
};

const rootElement = document.querySelector('#root');

ReactDOM.render(<Profile/>, rootElement);

