import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import EditForm from "./EditForm";
import { useState } from "react";

const GameCard = ({ game, games, setGames, onGameDelete }) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };

  // function removeGames(id) {
  //   fetch(`http://localhost:9292/games/${id}`, {
  //     method: "DELETE",
  //   });
  //   setGames((currentGames) => currentGames.filter((game) => game.id !== id));
  // }
  // function removeGames(id) {
  //   const updatedGames = games.filter((game) => game.id !== id);
  //   setGames(updatedGames);
  // }

  // const removeGames = (e) => {
  //   if (games) {
  //     setGames(games.filter((el) => el.id !== game.id));
  //   }
  // };

  function handleDeleteButton(id) {
    fetch(`http://localhost:9292/games/${id}`, {
      method: "DELETE",
    });
    onGameDelete(game.id);
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
      </CardContent>
      <CardActions>
        <Button variant="contained">Add to Cart</Button>
        <Button variant="contained">❤️ </Button>
        <Button variant="contained" onClick={handleDeleteButton}>
          Delete
        </Button>

        <EditIcon onClick={handleEdit}> {edit && <EditForm />}</EditIcon>
      </CardActions>
    </Card>
  );
};

export default GameCard;
