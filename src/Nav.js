import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav({ dogs }) {
  return (
    <nav className="Nav">
      <NavLink exact to="/dogs">
        Home
      </NavLink>
      {dogs.map((d) => (
        <NavLink exact to={`/dogs/${d.name}`}>
          {d.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
