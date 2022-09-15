import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const GameCard = ({ game }) => {
  //   const useStyles = makeStyles({
  //     root: {
  //       maxWidth: 345,
  //     },
  //     media: {
  //       height: 140,
  //     },
  //   });
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
        <Button variant="contained">Delete</Button>
      </CardActions>
    </Card>
    // <Card className={game.root}>
    //   <CardActionArea>
    //     <CardMedia className="gameURL" image={game.imageURL} />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         {game.title}
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         {game.release_date}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Button size="small" color="primary">
    //       Add to Cart
    //     </Button>
    //     <Button size="small" color="primary">
    //       ❤️
    //     </Button>
    //   </CardActions>
    // </Card>

    // <div className="game-card">
    //   <h1>{game.title}</h1>
    //   <p>{game.imageURL}</p>
    //   <p>{game.release_date}</p>
    // </div>
  );
};

export default GameCard;
