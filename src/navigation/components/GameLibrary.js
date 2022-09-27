import React from "react";
import GameCard from "./GameCard";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";

const GameLibrary = ({ games, handleAddGame }) => {
  const renderGames = games.map((game) => (
    <GameCard key={game.id} game={game} />
  ));
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
  // const [genreList, setGenreList] = useState(null);
  const [imageURL, setImageURL] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        release_date: releaseDate,
        imageURL: imageURL,
      }),
    })
      .then((r) => r.json())
      .then((newGame) => {
        handleAddGame(newGame);
      });
  }

  const titleHandler = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const releaseDateHandler = (e) => {
    setReleaseDate(e.target.value);
    console.log(e.target.value);
  };

  // const genreHandler = (e) => {
  //   setGenreList(e.currentTarget);
  //   console.log(e.currentTarget);
  //   console.log(e.target.value);
  // };

  const imageURLHandler = (e) => {
    setImageURL(e.target.value);
    console.log(e.target.value);
  };

  // const handleClose = () => {
  //   setGenreList(null);
  // };

  return (
    <div className="library">
      <form className={classes.root} noValidate autoComplete="off">
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
        {/* <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={genreHandler}
        >
          Genres
        </Button> */}
        {/* <Menu
          id="simple-menu"
          value={genreList}
          keepMounted
          open={Boolean(genreList)}
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
        </Menu> */}
        <TextField
          id="outlined-basic"
          label="Image URL"
          variant="outlined"
          value={imageURL}
          onChange={imageURLHandler}
        />
        <Button variant="outlined" color="secondary" onClick={handleSubmit}>
          Add to Library
        </Button>
      </form>
      <h1>Game Library</h1>
      <ul>{renderGames}</ul>
    </div>
  );
};

export default GameLibrary;
