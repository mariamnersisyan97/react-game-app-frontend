import React from "react";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <h1>Game Card</h1>
      <p>{game.title}</p>
      <p>{game.imageURL}</p>
    </div>
  );
};

export default GameCard;
