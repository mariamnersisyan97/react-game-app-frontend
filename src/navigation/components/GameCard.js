import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import EditGame from "./EditGame";

const GameCard = ({ game, onGameDelete, handleUpdateGames, id }) => {
  const [editing, setEditing] = useState(false);

  function handleDeleteButton(id) {
    fetch(`http://localhost:9292/games/${id}`, {
      method: "DELETE",
    });
    onGameDelete(game.id);
  }

  function handleUpdatingGame(updatedGame) {
    setEditing(false);
    handleUpdateGames(updatedGame);
  }
  return (
    <Card>
      <CardContent>
        <CardMedia
          component="img"
          alt={game.title}
          height="300"
          image={game.imageURL}
        />
        <button onClick={handleDeleteButton}>🗑️</button>
      </CardContent>
      {editing ? (
        <EditGame
          key={id}
          game={game}
          editing={editing}
          setEditing={setEditing}
          handleUpdateGames={handleUpdateGames}
          handleUpdatingGame={handleUpdatingGame}
        />
      ) : (
        <CardContent>
          <Typography>{game.title}</Typography>
          <Typography>{game.release_date}</Typography>
          <button onClick={() => setEditing((editing) => !editing)}>
            Edit
          </button>
        </CardContent>
      )}
    </Card>
  );
};

export default GameCard;
