import {useState} from "react";
import ReactDOM  from "react-dom";


function State(){
    const [data,setData]=useState("manisha") //(0)
   function updateData() {
setData("Sinha")//(data +1)
}

return(
    <div className="State">
        <h1>{data}</h1>
        <button onClick={updateData}>Update State</button>
    </div>
);
}

export default State;