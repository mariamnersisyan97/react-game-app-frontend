import React, { useState } from "react";
import { TextField } from "@material-ui/core";

function AddGenre() {
  const [name, setName] = useState("");

  const handleSubmit = (e, handleAddGenre) => {
    e.preventDefault();

    fetch(`http://localhost:9292/genres`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    })
      .then((r) => r.json())
      .then((newGenreAdded) => {
        handleAddGenre(newGenreAdded);
      });
    console.log("hi");
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <TextField value={name} onChange={nameHandler}></TextField>
      <button onClick={handleSubmit}>Add Genre</button>
    </div>
  );
}

export default AddGenre;
