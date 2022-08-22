import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

const rootDOM = document.getElementById('root');
const appRoot = ReactDOM.createRoot(rootDOM);


appRoot.render(
    <>
        <App name="test"/>
        <App name="test2"/>
        <App name="test3"/>
    </>
);
