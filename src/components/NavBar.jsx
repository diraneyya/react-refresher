import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Counter</Link>
          </li>
          <li>
          <Link to="/api-fetch">ApiFetch</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
