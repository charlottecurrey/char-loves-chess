// Square.js
import React, { useState } from "react";
import King from "../pieces/King";
import Queen from "../pieces/Queen";
import Bishop from "../pieces/Bishop";
import Knight from "../pieces/Knight";
import Rook from "../pieces/Rook";
import Pawn from "../pieces/Pawn";

const Square = ({
  piece,
  squareColor,
  onDragOver,
  onDragStart,
  onDrop,
  row,
  col,
}) => {
  const [highlight, setHighlight] = useState(false);

  const handleDragStart = (e) => {
    onDragStart(e);
    setHighlight(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setHighlight(true);
  };

  const handleDragExit = () => {
    setHighlight(false);
  };

  const backgroundColor = highlight ? "lightgreen" : squareColor;

  const renderPiece = () => {
    const color = piece.charAt(0) === "w" ? "white" : "black";
    const type = piece.charAt(1);

    switch (type) {
      case "k":
        return <King color={color} />;
      case "q":
        return <Queen color={color} />;
      case "b":
        return <Bishop color={color} />;
      case "n":
        return <Knight color={color} />;
      case "r":
        return <Rook color={color} />;
      case "p":
        return <Pawn color={color} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="square"
      style={{
        backgroundColor,
        display: "inline-block",
        width: "50px",
        height: "50px",
      }}
      onDragOver={handleDragOver}
      onDragExit={handleDragExit}
      onDragStart={handleDragStart}
      onDrop={onDrop}
      draggable={piece !== "--"}
    >
      {piece !== "--" && renderPiece()}
    </div>
  );
};

export default Square;
