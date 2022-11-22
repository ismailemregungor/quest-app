import React from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import User from "../User/User";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">
            <Home />
          </Link>
        </li>
        <li>
          <Link to={{ pathname: `users` }}>
            <User />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
