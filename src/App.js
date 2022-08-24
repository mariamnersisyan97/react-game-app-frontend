import { IconButton } from "@material-ui/core";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import { Login } from "./Login";
import Navbar from "./Navbar";
import SongLibrary from "./SongLibrary";
import Submit from "./Submit";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useState } from "react";
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

  const [loginRender, setLoginRender] = useState([]);
  const loginOnClick = () => {
    setLoginRender((login) => [...login, <Login />]);
    console.log("login");
  };

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
            Jukebox
          </Typography>
          <Button onClick={loginOnClick} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="navbar" element={<Navbar />} />
        <Route path="library" element={<SongLibrary />} />
        <Route path="submit" element={<Submit />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
