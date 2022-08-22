import React from 'react';
import ReactDOM from 'react-dom/client';
import {MyComponent} from './App.js'

const rootDOM = document.getElementById('root');
const appRoot = ReactDOM.createRoot(rootDOM);

appRoot.render(
    <>
    <h1>My refresher app2</h1>
    <MyComponent />
</>


);