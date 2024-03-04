import React, { useState } from "react";
import King from "../pieces/King";
import Queen from "../pieces/Queen";
import Bishop from "./pieces/Bishop";

const Square = ({ piece, onDragOver, onDragStart, onDrop }) => {
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

  const backgroundColor =
    highlight || piece.startsWith("w") ? "lightgray" : "darkgray";

  const renderPiece = () => {
    const color = piece.charAt(0) === "w" ? "white" : "black";
    const type = piece.charAt(1);

    switch (type) {
      case "k":
        return <King color={color} />;
      case "q":
        return <Queen color={color} />;
      case "b": // Add the case for the bishop
        return <Bishop color={color} />;
      // Add cases for other piece types
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
