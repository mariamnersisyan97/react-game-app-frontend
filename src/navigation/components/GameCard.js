import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import { useState } from "react";
import EditGame from "./EditGame";

const GameCard = ({
  game,
  onGameDelete,
  handleUpdateGames,
  id,
  genres,
  setGenres,
}) => {
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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={game.title}
        height="300"
        image={game.imageURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game.title}
        </Typography>
        <Typography variant="body2">
          Release Date: {game.release_date}
        </Typography>
        <Typography variant="body2">Genre ID: {game.genre_id}</Typography>
        {/* <Typography variant="body2">{genres.name}</Typography> */}
      </CardContent>
      <CardActions>
        <Button variant="contained">Add to Cart</Button>
        <Button variant="contained" onClick={handleDeleteButton}>
          Delete
        </Button>

        <EditIcon onClick={() => setEditing((editing) => !editing)}>
          {" "}
          {editing ? (
            <EditGame
              key={id}
              game={game}
              handleUpdateGames={handleUpdateGames}
            />
          ) : (
            <p>{game}</p>
          )}
        </EditIcon>
      </CardActions>
    </Card>
  );
};

export default GameCard;
