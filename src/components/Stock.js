import React from "react";

function Stock({ stock, handleStockClick }) {

  function handleSale() {
    handleStockClick(stock)
  }
  return (
    <div>
      <div className="card" onClick={handleSale}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
