import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Navbar from "./Navbar";
import SongLibrary from "./SongLibrary";

function App() {
  return (
    <div className="App">
      <h1>Jukebox</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="navbar" element={<Navbar />} />
        <Route path="library" element={<SongLibrary />} />
      </Routes>
    </div>
  );
}
export default App;
