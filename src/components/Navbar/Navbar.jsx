import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbarContainer">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to={{ pathname: `users` }}>User</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
