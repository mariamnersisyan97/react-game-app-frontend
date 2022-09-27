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

function App({}) {
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

  const baseURL = `http://localhost:9292/games`;

  useEffect(() => {
    fetch(baseURL)
      .then((r) => r.json())
      .then(setGames);
  }, []);

  function fetchAllGames() {
    fetch(baseURL)
      .then((r) => r.json())
      .then((data) => setGames(data));
    setGames(games);
  }

  // function handleAddGame(newGame) {
  //   fetch(baseURL, {
  //     method: "POST",
  //     headers: new Headers({ "Content-Type": "application/json" }),
  //     body: JSON.stringify(newGame),
  //   })
  //     .then((r) => r.json())
  //     .then((newGame) => {
  //       onAddGame(newGame);
  //     });
  //   setGames([...games, newGame]);
  // }

  function handleAddGame(newGame) {
    setGames([...games, newGame]);
  }
  function handleUpdateGames(updatedGame, id) {
    fetch(baseURL + `/${id}`, {
      method: "PATCH",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(updatedGame),
    });
  }
  function removeGames(id) {
    fetch(baseURL + `/${id}`, {
      method: "DELETE",
    });
    setGames((currentGames) => currentGames.filter((game) => game.id !== id));
  }

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
              removeGames={removeGames}
              fetchAllGames={fetchAllGames}
              handleUpdateGames={handleUpdateGames}
              handleAddGame={handleAddGame}
            />
          }
        />
        <Route exact path="login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
