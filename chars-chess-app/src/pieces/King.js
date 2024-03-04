import React from "react";
import whiteKingImage from "../pieces/wk.png";
import blackKingImage from "../pieces/bk.png";

const King = ({ color }) => {
  const image = color === "white" ? whiteKingImage : blackKingImage;

  return (
    <img
      src={image}
      alt={`${color} king`}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default King;
