import React from "react";

const CardHeader = ({ product }) => {
  console.log("Nom du jeu", product.name);
  return (
    <div>
      <p>{product.name}</p>
    </div>
  );
};

export default CardHeader;
