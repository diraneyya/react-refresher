import react, { useSyncExternalStore } from "react";
import ReactDOM from "react-dom";

const name ='Manisha Sinha';

const element =(
    <div className="person-item">
        <p>{name}</p>

    </div>
);

ReactDOM.render(element,document.getElementById('root'));

export default Users;