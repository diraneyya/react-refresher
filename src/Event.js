import react from "react";
import ReactDOM from "react-dom";

 alert("Hello");
 
function Event() {
  function App() {
    alert("Event function called");
  }
  return (
    <div className="App">
      <h1>Hello Event</h1>
      <button onClick={()=> App}>Click Me</button>
    </div>
  );
}

export default Event;