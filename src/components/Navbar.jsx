import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/candy">Candy</Link> |{" "}
      <Link to="/movie">Movie</Link> | <Link to="/playing">Now Playing</Link>
      {/* <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/candy">Concession</a>
        </li>
        <li>
          <a href="/movie">Popular</a>
        </li>
        <li>
          <a href="/playing">Now Playing</a>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
