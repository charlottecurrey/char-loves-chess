import React, { useState } from "react";
import Board from "./components/Board";
import GameInfo from "./components/GameInfo";
import { initialBoardState, isInCheck, isInCheckmate } from "./utils/gameLogic";
import "./App.css";

function App() {
  const [board, setBoard] = useState(initialBoardState);
  const [currentPlayer, setCurrentPlayer] = useState("white");
  const [gameStatus, setGameStatus] = useState("active");

  const handleMove = (sourceSquare, targetSquare) => {
    // implement game logic for handling moves
    const updatedBoard = makeMove(
      board,
      sourceSquare,
      targetSquare,
      currentPlayer
    );
    setBoard(updatedBoard);

    // check if check/checkmate conditions & update gameStatus
    const isCurrentPlayerInCheck = isInCheck(updatedBoard, currentPlayer);
    const isCurrentPlayerInCheckmate = isInCheckmate(
      updatedBoard,
      currentPlayer
    );

    if (isCurrentPlayerInCheckmate) {
      setGameStatus(
        `checkmate-${currentPlayer === "white" ? "black" : "white"}`
      );
    } else if (isCurrentPlayerInCheck) {
      setGameStatus(`check-${currentPlayer}`);
    } else {
      setGameStatus("active");
    }

    setCurrentPlayer(currentPlayer === "white" ? "black" : "white");
  };

  return (
    <div className="App">
      <GameInfo currentPlayer={currentPlayer} gameStatus={gameStatus} />
      <Board board={board} onMove={handleMove} />
    </div>
  );
}

export default App;
