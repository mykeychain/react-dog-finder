import './App.css';
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from './Nav';
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import whiskey from "../whiskey.jpg";
import duke from "../duke.jpg";
import perry from "../perry.jpg";
import tubby from "../tubby.jpg";

function App({dogs}) {
  return (
    <div className="App">
      <Nav dogs={dogs}/>
      <Switch>
        <Route path="/dogs/:name" >
          <DogDetails />
        </Route>
        <Route exact path="/dogs" >
          <DogList dogs={dogs}/>
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
