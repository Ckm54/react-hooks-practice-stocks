import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, addStock }) {

  const stockcard = stocks.map((stock) => <Stock key={stock.id} stock={stock} handleStockClick={addStock}/>)
  return (
    <div>
      <h2>Stocks</h2>
      <p>Click on stock to buy and add to portfolio</p>
      {stockcard}
    </div>
  );
}

export default StockContainer;
