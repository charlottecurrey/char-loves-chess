import React from "react";
import whiteRookImage from "../pieces/wr.png";
import blackRookImage from "../pieces/br.png";

const Rook = ({ color }) => {
  const image = color === "white" ? whiteRookImage : blackRookImage;

  return (
    <img
      src={image}
      alt={`${color} king`}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default Rook;
