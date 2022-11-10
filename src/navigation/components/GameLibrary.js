import React, { useEffect } from "react";
import GameCard from "./GameCard";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import Menu from "@material-ui/core/Menu";

const GameLibrary = ({
  games,
  handleAddGame,
  removeGames,
  onGameDelete,
  handleUpdateGames,
  genres,
  setGenres,
}) => {
  const renderGames = games.map((game) => (
    <GameCard
      key={game.id}
      game={game}
      removeGames={removeGames}
      onGameDelete={onGameDelete}
      handleUpdateGames={handleUpdateGames}
      genres={genres}
      setGenres={setGenres}
    />
  ));

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
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

  const imageURLHandler = (e) => {
    setImageURL(e.target.value);
    console.log(e.target.value);
  };

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

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      ></Menu>

      <select name="genre_id">
        <option>Select a Genre</option>
        {genres.map((g) => (
          <option value={g.id} key={g.id}>
            {g.name}
          </option>
        ))}
      </select>

      <h1>Game Library</h1>
      <ul>{renderGames}</ul>
    </div>
  );
};

export default GameLibrary;
