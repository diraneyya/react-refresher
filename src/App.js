import React from "react";
import ReactDOM  from "react-dom";

function App(){
    let data = "Welcome to React World";
    function Welcome(){
      data ="Click event and function in ReactJs"
      alert(data);
    }
    return(
      <div className="App">
        <h1>{data}</h1>
  <button onClick={Welcome}></button>
      </div>
    );
  }
  export default App;