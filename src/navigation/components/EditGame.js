import React, { useState } from "react";

function EditGame({ game, handleUpdateGames }) {
  const [gameTitle, setGameTitle] = useState(game.title);

  const { title, id } = game;

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/games/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: gameTitle,
      }),
    })
      .then((r) => r.json())
      .then((updatedGameTitle) => handleUpdateGames(updatedGameTitle));
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="game"
        autoComplete="off"
        value={body}
        onChange={(e) => setGameTitle(e.target.value)}
      />
    </form>
  );
}

export default EditGame;
