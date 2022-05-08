import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [stocksInPortfolio, setStocksInPortfolio] = useState([])
  const [sortTerm, setSortTerm] = useState("")
  const [stockFilter, setStockFilter] = useState("")

  useEffect(() => {
    fetch(`http://localhost:3001/stocks`)
    .then((res) => res.json())
    .then((stocksFetched) => setStocks(stocksFetched))
  }, []);

  function handleStockAdd(stockToAdd) {
    const inPortfolio = stocksInPortfolio.find((stock) => stock.id === stockToAdd.id)
    if(!inPortfolio) {
      setStocksInPortfolio([...stocksInPortfolio, stockToAdd])
    }
  }

  function handleRemoveFromPortfolio(stockToRemove) {
    console.log(stockToRemove)
  }

  return (
    <div>
      <SearchBar sortBy={sortTerm} handleSort={setSortTerm} filterBy={stockFilter} handleFilter={setStockFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} addStock={handleStockAdd}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={stocksInPortfolio} removeStock={handleRemoveFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
