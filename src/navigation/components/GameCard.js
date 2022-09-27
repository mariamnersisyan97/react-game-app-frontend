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

const GameCard = ({ game, removeGames, handleUpdateGames }) => {
  const handleDelete = () => {
    removeGames();
    console.log("deleted");
  };
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };
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
        <Button variant="contained" onClick={handleDelete}>
          Delete
        </Button>

        <EditIcon onClick={handleEdit}> {edit && <EditForm />}</EditIcon>
      </CardActions>
    </Card>
  );
};

export default GameCard;
