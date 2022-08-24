import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import SongLibrary from "./SongLibrary";
import Submit from "./Submit";

function App() {
  return (
    <div className="App">
      <h1>Jukebox</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="navbar" element={<Navbar />} />
        <Route path="library" element={<SongLibrary />} />
        <Route path="submit" element={<Submit />} />
      </Routes>
    </div>
  );
}
export default App;
