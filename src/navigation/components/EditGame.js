import React, { useState } from "react";

function EditGame({ game, setEditing, handleUpdatingGame }) {
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
      .then((updatedGame) => {
        handleUpdatingGame(updatedGame);
        setEditing(false);
      });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="game"
        autoComplete="off"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="text"
        name="date"
        autoComplete="off"
        value={form.release_date}
        onChange={(e) => setForm({ ...form, release_date: e.target.value })}
      />
      <button>Save</button>
    </form>
  );
}

export default EditGame;
