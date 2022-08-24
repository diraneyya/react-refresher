import React, { useState } from "react";

function MainModule(props) {
  let initialState = props.sex;
  let [state, setState] = useState(initialState);
  return (
    <div>
      {state === "man" ? (
        <h1>his name is Mr {props.name}</h1>
      ) : (
        <h1>her name is Ms {props.name}</h1>
      )}
      <button
        onClick={() =>
          setState(state === "woman" ? (state = "man") : (state = "woman"))
        }
      >
        Switch gender
      </button>
    </div>
  );
}

export default MainModule;
