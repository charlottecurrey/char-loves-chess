import React from "react";
import whiteKnightImage from "../pieces/wn.png";
import blackKnightImage from "../pieces/bn.png";

const Knight = ({ color }) => {
  const image = color === "white" ? whiteKnightImage : blackKnightImage;

  return (
    <img
      src={image}
      alt={`${color} king`}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default Knight;
