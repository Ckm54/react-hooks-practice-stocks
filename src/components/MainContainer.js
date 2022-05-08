import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [stocksInPortfolio, setStocksInPortfolio] = useState([])
  const [sortTerm, setSortTerm] = useState("Alphabetically")
  const [stockFilter, setStockFilter] = useState("All")

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
    const filteredPortfolio = stocksInPortfolio.filter((stock) => stock.id !== stockToRemove.id)
    setStocksInPortfolio(filteredPortfolio)
  }

  const stocksSorted = [...stocks].sort((stockA, stockB) => {
    if(sortTerm === "Alphabetically") {
      return stockA.name.localeCompare(stockB.name)
    } else {
      return stockA.price - stockB.price
    }
  })

  const stocksFiltered = stocksSorted.filter((stock) => {
    if(stockFilter === "All") {
      return stock
    }else {
      return stock.type === stockFilter
    }
  })

  return (
    <div>
      <SearchBar sortBy={sortTerm} onSort={setSortTerm} filterBy={stockFilter} onFilter={setStockFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocksFiltered} addStock={handleStockAdd}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={stocksInPortfolio} removeStock={handleRemoveFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
