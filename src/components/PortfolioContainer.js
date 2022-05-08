import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, removeStock}) {
  const portfolioItems = stocks.map((stock) => <Stock key={stock.id} stock={stock} handleStockClick={removeStock}/>)
  return (
    <div>
      <h2>My Portfolio</h2>
      <p>Click on stock to sell and remove from portfolio</p>
      {
        portfolioItems
      }
    </div>
  );
}

export default PortfolioContainer;
