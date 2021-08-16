import React from "react";
import { useParams } from "react-router-dom";
import "./DogDetails.css";

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dogInfo = dogs.filter((d) => d.name === name);
  const dog = dogInfo[0];
  return (
    <div className="DogDetails">
      <ul>
        <li>{dog.name}</li>
        <li>{dog.age}</li>
        <li>
          <img src={dog.src} />
        </li>
        {dog.facts.map((fact) => (
          <li>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
