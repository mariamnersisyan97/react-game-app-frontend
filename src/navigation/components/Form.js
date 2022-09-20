import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

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
  const [genre, setGenre] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddGame();
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
    setGenre(e.target.value);
    console.log(e.target.value);
  };

  const imageURLHandler = (e) => {
    setImageURL(e.target.value);
    console.log(e.target.value);
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
        <TextField
          id="outlined-basic"
          label="Genre"
          variant="outlined"
          value={genre}
          onChange={genreHandler}
        />
        <TextField
          id="outlined-basic"
          label="Image URL"
          variant="outlined"
          value={imageURL}
          onChange={imageURLHandler}
        />
      </form>
      <Button variant="outlined" color="secondary">
        Add to Library
      </Button>
    </div>
  );
};

export default Form;
