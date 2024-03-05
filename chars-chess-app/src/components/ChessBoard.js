import React from "react";
import Square from "./Square";
import { getSquareColor } from "../utils/helpers";

const ChessBoard = ({
  board,
  onDragStart,
  onDragOver,
  onDrop,
  sourceSquare,
  targetSquare,
}) => {
  const handleDragStart = (e, squareIndex) => {
    onDragStart(e, squareIndex);
  };

  const handleDragOver = (e, targetSquare) => {
    e.preventDefault();
    onDragOver(e, targetSquare);
  };

  const handleDrop = (e, targetSquare) => {
    const sourceSquare = e.dataTransfer.getData("text/plain");
    onDrop(sourceSquare, targetSquare);
  };

  const renderSquare = (i, j) => {
    const piece =
      sourceSquare === `${i},${j}`
        ? board[targetSquare[0]][targetSquare[1]]
        : board[i][j];
    const squareIndex = `${i},${j}`;

    return (
      <Square
        key={`${i},${j}`}
        piece={piece}
        row={i}
        col={j}
        squareColor={getSquareColor(i, j)}
        onDragStart={(e) => handleDragStart(e, squareIndex)}
        onDragOver={(e) => handleDragOver(e, squareIndex)}
        onDrop={(e) => handleDrop(e, squareIndex)}
      />
    );
  };

  const renderRow = (i) => {
    return (
      <div key={i} style={{ display: "flex" }}>
        {board[i].map((_, j) => renderSquare(i, j))}
      </div>
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>{board.map((_, i) => renderRow(i))}</div>
    </div>
  );
};

export default ChessBoard;
