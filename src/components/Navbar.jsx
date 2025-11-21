import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/candy">Candy</Link>
        </li>
        <li>
          <Link to="/movie">Movie</Link>
        </li>
        <li>
          <Link to="/playing">Now Playing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
