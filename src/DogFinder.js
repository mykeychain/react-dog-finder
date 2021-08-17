import DogDetails from "./DogDetails";
import { Redirect, useHistory, useParams } from "react-router-dom";

function DogFinder({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find((d) => d.name === name);

  const history = useHistory();

  if (!dog) {
    // history.push("/dogs");
    return <Redirect to="/dogs" />;
  }

  return <DogDetails dog={dog} />;
}

export default DogFinder;
