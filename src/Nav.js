import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import { v4 as uuid } from "uuid";

function Nav({ dogs }) {
  return (
    <nav className="Nav">
      <NavLink exact to="/dogs">
        Home
      </NavLink>
      {dogs.map((d) => (
        <NavLink exact to={`/dogs/${d.name}`} key={uuid()}>
          {d.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
