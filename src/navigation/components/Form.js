import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import GameLibrary from "./GameLibrary";

const Form = ({ games, setGames, handleAddGame }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState(null);
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddGame();
    return <GameLibrary />;
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const releaseDateHandler = (e) => {
    setReleaseDate(e.target.value);
    console.log(e.target.value);
  };

  const genreHandler = (e) => {
    setGenre(e.currentTarget);
    console.log(e.currentTarget);
    console.log(e.target.value);
  };

  const imageURLHandler = (e) => {
    setImageURL(e.target.value);
    console.log(e.target.value);
  };

  const handleClose = () => {
    setGenre(null);
  };
  return (
    <div className="login">
      <h1> Add a New Game</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={title}
          onChange={titleHandler}
        />
        <TextField
          id="outlined-basic"
          label="Release Date"
          variant="outlined"
          value={releaseDate}
          onChange={releaseDateHandler}
        />
        {/* <TextField
          id="outlined-basic"
          label="Genre"
          variant="outlined"
          value={genre}
          onChange={genreHandler}
        /> */}
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={genreHandler}
        >
          Genres
        </Button>
        <Menu
          id="simple-menu"
          value={genre}
          keepMounted
          open={Boolean(genre)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Role Playing Game</MenuItem>
          <MenuItem onClick={handleClose}>Open World</MenuItem>
          <MenuItem onClick={handleClose}>First-Person Shooter</MenuItem>
          <MenuItem onClick={handleClose}>Puzzle</MenuItem>
          <MenuItem onClick={handleClose}>Simulation</MenuItem>
          <MenuItem onClick={handleClose}>Action-adventure</MenuItem>
          <MenuItem onClick={handleClose}>
            Multiplayer Online Battle Arena
          </MenuItem>
          <MenuItem onClick={handleClose}>Sports</MenuItem>
        </Menu>
        <TextField
          id="outlined-basic"
          label="Image URL"
          variant="outlined"
          value={imageURL}
          onChange={imageURLHandler}
        />
        <Button variant="outlined" color="secondary">
          Add to Library
        </Button>
      </form>
    </div>
  );
};

export default Form;
