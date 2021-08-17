import { useState } from "react";

function AddDog({ submit }) {
  const [formData, setFormData] = useState({});

  return (
    <form>
      <input name="name">Name</input>
      <input age="age">Age</input>
      <input src="src">src</input>
      <input facts="facts">Facts</input>
      <button>Add</button>
    </form>
  );
}
