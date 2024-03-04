import React from "react";
import Square from "./Square";
import { initialBoardState } from "../utils/gameLogic";

const Board = ({ board, onMove }) => {
  const handleDragStart = (e, sourceSquare) => {
    e.dataTransfer.setData("text/plain", sourceSquare);
  };

  const handleDragOver = (e, targetSquare) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetSquare) => {
    const sourceSquare = e.dataTransfer.getData("text/plain");
    onMove(sourceSquare, targetSquare);
  };

  const renderSquare = (i, j) => {
    const piece = board[i][j];
    const sourceSquare = `${i},${j}`;

    return (
      <Square
        key={`${i},${j}`}
        piece={piece}
        onDragOver={(e) => handleDragOver(e, sourceSquare)}
        onDragStart={(e) => handleDragStart(e, sourceSquare)}
        onDrop={(e) => handleDrop(e, sourceSquare)}
      />
    );
  };

  const renderRow = (i) => {
    return (
      <div key={i} style={{ whiteSpace: "nowrap" }}>
        {board[i].map((_, j) => renderSquare(i, j))}
      </div>
    );
  };

  return <div>{board.map((_, i) => renderRow(i))}</div>;
};

export default Board;
