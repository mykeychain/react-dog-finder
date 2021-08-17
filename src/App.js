import "./App.css";
import React, { useState } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Nav from "./Nav";
import DogList from "./DogList";
import AddDog from "./AddDog";
import whiskey from "./whiskey.jpg";
import duke from "./duke.jpg";
import perry from "./perry.jpg";
import tubby from "./tubby.jpg";
import DogFinder from "./DogFinder";

function App({ initialDogs }) {
  const [dogs, setDogs] = useState(initialDogs);

  function add(dog) {
    setDogs(oldDogs => (
      [...oldDogs, dog]
    ));
  };

  return (
    <div className="App">
      <Nav dogs={dogs} />
      <Switch>
        <Route exact path="/add">
          <AddDog add={add} />
        </Route>
        <Route exact path="/dogs">
          <DogList dogs={dogs} />
        </Route>
        <Route exact path="/dogs/:name">
          <DogFinder dogs={dogs} />
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </div>
  );
}

App.defaultProps = {
  initialDogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
};

export default App;
