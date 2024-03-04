import React from "react";
import whiteBishopImage from "../pieces/wb.png";
import blackBishopImage from "../pieces/bb.png";

const Bishop = ({ color }) => {
  const image = color === "white" ? whiteBishopImage : blackBishopImage;

  return (
    <img
      src={image}
      alt={`${color} bishop`}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default Bishop;
