import React, { useState } from "react";
import ChessBoard from "./components/ChessBoard";
import GameInfo from "./components/GameInfo";
import {
  initialBoardState,
  isInCheck,
  isInCheckmate,
  makeMove,
} from "./utils/gameLogic";
import "./App.css";

function App() {
  const [board, setBoard] = useState(initialBoardState);
  const [currentPlayer, setCurrentPlayer] = useState("white");
  const [gameStatus, setGameStatus] = useState("active");
  const [sourceSquare, setSourceSquare] = useState(null);
  const [targetSquare, setTargetSquare] = useState(null);

  const handleDragStart = (e, sourceSquare) => {
    e.dataTransfer.setData("text/plain", sourceSquare);
  };

  const handleDragOver = (e, targetSquare) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetSquare) => {
    const sourceSquare = e.dataTransfer.getData("text/plain");
    handleMove(sourceSquare, targetSquare);
  };

  const handleMove = (source, target) => {
    const { newBoard, sourceSquare, targetSquare } = makeMove(
      board,
      source,
      target,
      currentPlayer
    );
    setBoard(newBoard);
    setSourceSquare(sourceSquare);
    setTargetSquare(targetSquare);

    // Check for check/checkmate conditions and update gameStatus
    const isCurrentPlayerInCheck = isInCheck(newBoard, currentPlayer);
    const isCurrentPlayerInCheckmate = isInCheckmate(newBoard, currentPlayer);

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
      <ChessBoard
        board={board}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      />
    </div>
  );
}

export default App;
