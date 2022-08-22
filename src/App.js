import React from "react";
import  ReactDOM  from "react";
import App from './app';

import './style.css';

const name ='Manisha Sinha';

const element= (
    <div className="name">
        <p>{name}</p>

    </div>
);

ReactDOM.render(element,document.getElementById('root'));