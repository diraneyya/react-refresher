import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstComponent from "./App"

const rootDOM = document.getElementById('root');
const appRoot = ReactDOM.createRoot(rootDOM);

appRoot.render(
    <FirstComponent/>
);