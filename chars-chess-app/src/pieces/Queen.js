import React from "react";
import whiteQueenImage from "../pieces/wq.png";
import blackQueenImage from "../pieces/bq.png";

const Queen = ({ color }) => {
  const image = color === "white" ? whiteQueenImage : blackQueenImage;

  return (
    <img
      src={image}
      alt={`${color} king`}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default Queen;
