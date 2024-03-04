import React from "react";

const GameInfo = ({ currentPlayer, gameStatus }) => {
  return (
    <div>
      <h3>Current Player: {currentPlayer}</h3>
      <h3>Game Status: {gameStatus}</h3>
    </div>
  );
};

export default GameInfo;
