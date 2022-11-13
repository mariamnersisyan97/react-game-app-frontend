import { IconButton } from "@material-ui/core";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./navigation/components/Home";
import { Login } from "./navigation/components/Login";
import Navbar from "./navigation/components/Navbar";
import GameLibrary from "./navigation/components/GameLibrary";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useState, useEffect } from "react";
import AddGenre from "./navigation/components/AddGenre";

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();

  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);

  const baseURL = `http://localhost:9292/games`;

  useEffect(() => {
    fetch(baseURL)
      .then((r) => r.json())
      .then(setGames);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:9292/genres`)
      .then((r) => r.json())
      .then(setGenres);
  }, []);

  function handleDeleteGame(id) {
    const updatedGames = games.filter((game) => game.id !== id);
    setGames(updatedGames);
  }
  function handleAddGame(newGame) {
    setGames([...games, newGame]);
  }
  function handleAddGenre(newGenre) {
    setGenres([...genres, newGenre]);
  }
  function handleUpdateGames(updatedGame, id) {
    fetch(baseURL + `/${id}`, {
      method: "PATCH",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(updatedGame),
    });
  }
  // function handleUpdateGames(updatedGameObj) {
  //   const updatedGameCard = games.map((game) => {
  //     if (game.id === updatedGameObj.id) {
  //       return updatedGameObj;
  //     } else {
  //       return game;
  //     }
  //   });
  //   setGames(updatedGameCard);
  // }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            Gamebox
          </Typography>
        </Toolbar>
      </AppBar>

      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="library"
          element={
            <GameLibrary
              games={games}
              setGames={setGames}
              onGameDelete={handleDeleteGame}
              handleAddGame={handleAddGame}
              handleUpdateGames={handleUpdateGames}
              genres={genres}
              setGenres={setGenres}
              handleAddGenre={handleAddGenre}
            />
          }
        />
        <Route exact path="login" element={<Login />} />
        <Route exact path="genre" element={<AddGenre />} />
      </Routes>
    </div>
  );
}
export default App;
