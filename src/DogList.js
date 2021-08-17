import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

function DogList({ dogs }) {
  return (
    <div className="DogList">
      <ul>
        Our dogs:
        {dogs.map((d) => (
          <li key={d.name}>
            <Link to={`/dogs/${d.name}`}>{d.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogList;
