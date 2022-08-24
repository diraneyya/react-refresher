import React from "react";
import ReactDOM from "react-dom/client";
import MainModule from "./MainModule.js";

const rootDOM = document.getElementById("root");
const appRoot = ReactDOM.createRoot(rootDOM);

appRoot.render(
  <div>
    <MainModule name="Johny" sex="man" />
    <MainModule name="Maria" sex="woman" />
    <MainModule name="Hercules" sex="man" />
    <MainModule name="Jamie" sex="man" />
    <MainModule name="Kate" sex="woman" />
  </div>,
  appRoot
);
