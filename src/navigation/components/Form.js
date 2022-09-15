import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Form = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));
  const classes = useStyles();

  const [newGame, setNewGame] = useState({
    title: "",
    release_date: "",
    genre: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setNewGame((newGame) => ({
      ...newGame,
      [e.target.title]: e.target.value,
    }));
    console.log(newGame);
  };

  return (
    <div className="login">
      <h1> Add a New Game</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onChange={handleChange}
      >
        <TextField id="outlined-basic" label="Title" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Release Date"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Genre" variant="outlined" />
        <TextField id="outlined-basic" label="Image URL" variant="outlined" />
      </form>
      <Button variant="outlined" color="secondary">
        Add to Library
      </Button>
    </div>
  );
};

export default Form;
