import { IconButton } from "@material-ui/core";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./navigation/components/Home";
import { Login } from "./navigation/components/Login";
import Navbar from "./navigation/components/Navbar";
import GameLibrary from "./navigation/components/GameLibrary";
import Submit from "./navigation/components/Submit";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";

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

  const [loginRender, setLoginRender] = useState("");

  const [games, setGames] = useState("");

  const baseURL = `http://localhost:9292/games`;

  useEffect(() => {
    fetch(baseURL)
      .then((r) => r.json())
      .then(setGames);
  }, []);

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
          <Button onClick={() => setLoginRender("Login")} color="inherit">
            Login{loginRender === "Login" && <Login />}
          </Button>
          {/* <div>{loginRender === "Login" && <Login />}</div> */}
        </Toolbar>
      </AppBar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="navbar" element={<Navbar />} /> */}
        <Route
          exact
          path="library"
          element={<GameLibrary games={games} setGames={setGames} />}
        />
        <Route exact path="form" element={<Submit />} />
        <Route exact path="login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
