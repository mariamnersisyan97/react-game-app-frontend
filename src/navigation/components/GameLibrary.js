import React from "react";
import GameCard from "./GameCard";

const SongLibrary = ({ games }) => {
  const renderGames = games.map((game) => (
    <GameCard key={game.id} game={game} />
  ));
  return (
    <div className="library">
      <h1>Game Library</h1>
      <ul>{renderGames}</ul>
    </div>
  );
};

export default SongLibrary;
