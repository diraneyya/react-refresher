import React from "react";
import ReactDOM from "react-dom/client";
import { User} from "./User";
 import { Users} from "./Users";
 import { App } from "./App";
 import {Event} from "./Event";
 import {State} from "./State";

const rootDOM = document.getElementById("root");
const appRoot = ReactDOM.createRoot(rootDOM);
function Hello() {
  <div>
  <h1>Hello React First App</h1>
  <input text="value"/>
<butoon>Click Me</butoon>
</div>
}
appRoot.render(<Hello/>);
// ReactDOM.render(<App/>,<Event/>,<State/>);