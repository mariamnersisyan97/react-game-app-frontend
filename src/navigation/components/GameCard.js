import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const GameCard = ({ game, removeGames }) => {
  //   const useStyles = makeStyles({
  //     root: {
  //       maxWidth: 345,
  //     },
  //     media: {
  //       height: 140,
  //     },
  //   });

  const handleDelete = () => {
    console.log("deleted");
  };

  const handleEdit = () => {
    console.log("edit");
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
        <Button variant="contained" onClick={handleEdit}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default GameCard;
