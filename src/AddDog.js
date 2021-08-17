import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

function AddDog({ add }) {
  const [formData, setFormData] = useState({});
  const history = useHistory();

  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value,
    }))
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    add(formData);
    return <Redirect to="/dogs" />
    // history.push("/dogs");
  }



  return (
    <form className="AddDog" onChange={handleChange} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="name"></input>
      <input type="text" name="age" placeholder="age"></input>
      <input type="text" name="src" placeholder="src"></input>
      <input type="text" name="facts" placeholder="facts"></input>
      <button>Add</button>
    </form>
  );
}

export default AddDog;
