import React from 'react';

function App (props) {
    let [test, setTest] = React.useState(0);
    return (
        <div>
            <h1 style={{backgroundColor:"pink", fontSize:"32px", fontWeight:700}}>Hello, this is {props.name}</h1>
            <h2>{test}</h2>
            <button onClick={()=> setTest(test+1)}>
                test button
            </button>
        </div>
    )
}

export default App;