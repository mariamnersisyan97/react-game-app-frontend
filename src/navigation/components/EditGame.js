import React, { useState } from "react";

function EditGame({ game, handleUpdateGames }) {
  const { title, release_date, id } = game;
  const [form, setForm] = useState({
    title: title,
    release_date: release_date,
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/games/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((r) => r.json())
      .then((updatedGame) => handleUpdateGames(updatedGame));
  }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.title]: e.target.value });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="game"
        autoComplete="off"
        value={form.title}
        onChange={(e) => setForm(e.target.value)}
      />
      <input
        type="text"
        name="date"
        value={form.release_date}
        // onChange={handleChange}
      />
      <button>Save</button>
    </form>
  );
}

export default EditGame;
