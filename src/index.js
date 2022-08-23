import React from 'react';
import ReactDOM from 'react-dom/client';

const rootDOM = document.getElementById("root");
const appRoot = ReactDOM.createRoot(rootDOM);
appRoot.render(
  function Hello(props){
    return<h1>Hello React First App</h1>
  }
);

appRoot.render(<Hello />);