import React from "react";

const Stock = ({ securityName, symbol, lastTradedPrice, ...rest }) => {
  console.log(rest, "in stock");
  return (
    <div>
      <h1>{securityName}</h1>
      <h2>{symbol}</h2>
      <h3>{lastTradedPrice}</h3>
    </div>
  );
};

export default Stock;
