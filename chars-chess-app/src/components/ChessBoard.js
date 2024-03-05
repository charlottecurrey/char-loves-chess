import React from "react";
import Square from "./Square";
import { getSquareColor } from "../utils/helpers";

const ChessBoard = ({ board, onDragStart, onDragOver, onDrop }) => {
  const handleDragStart = (e, squareIndex) => {
    onDragStart(e, squareIndex);
  };

  const handleDragOver = (e, targetSquare) => {
    e.preventDefault();
    onDragOver(e, targetSquare);
  };

  const handleDrop = (e, targetSquare) => {
    onDrop(e, targetSquare);
  };

  const renderSquare = (i, j) => {
    const piece = board[i][j];
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

  return <div>{board.map((_, i) => renderRow(i))}</div>;
};

export default ChessBoard;
