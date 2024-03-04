import React from "react";
import whitePawnImage from "../pieces/wp.png";
import blackPawnImage from "../pieces/bp.png";

const Pawn = ({ color }) => {
  const image = color === "white" ? whitePawnImage : blackPawnImage;

  return (
    <img
      src={image}
      alt={`${color} king`}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default Pawn;
