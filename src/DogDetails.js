import React from "react";
import "./DogDetails.css";
import { v4 as uuid } from "uuid";

function DogDetails({ dog }) {
  return (
    <div className="DogDetails">
      <ul>
        <li>{dog.name}</li>
        <li>{dog.age}</li>
        <li>
          <img src={dog.src} alt={dog.name} />
        </li>
        {dog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
