import React from "react";
import { Link } from "react-router-dom";
import DogDetails from "./DogDetails";

function DogList({ dogs }) {
  return dogs.map((d) => (
    <Link exact to={`/dogs/${d.name}`}>
      {d.name}
    </Link>
  ));
}

export default DogList;
