import React from "react";
import ReactDOM from "react-dom";
import './style.css';
export const App =(
    <div>
        <h1 className="text-center">My Contact List</h1>
        <div>
        <h3>Akardi</h3>
        <h4>+3644679809</h4>
        <button>Delete</button>
        <br/>

        <h3>Svetlana</h3>
        <h4>+3556678899</h4>
        <button>Delete</button>
        <br/>

        <h3>Carly</h3>
        <h4>+3556678899</h4>
        <button>Delete</button>
        <br/>

        <h3>Manisha Sinha</h3>
        <h4>+3556678899</h4>
        <button>Delete</button>
        <br/>

        </div>
    </div>
);

ReactDOM.render(App,document.getElementById('root'));