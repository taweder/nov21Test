import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
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
      </ul>
    </nav>
  );
};

export default Navbar;
