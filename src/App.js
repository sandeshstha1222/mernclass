import logo from "./logo.svg";
import "./App.css";
import Stock from "./Stock";
import { STOCKS } from "./constant";
import Counter from "./Counter";
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

function App() {
  const [stocks, setStocks] = useState(STOCKS);
  const addStock = () => {
    setStocks([
      ...stocks,
      {
        securityId: "2790",
        securityName: "Aarambha Chautari Laghubitta Bittiya Sanstha Limited",
        symbol: "ACLBSL",
        indexId: 58,
        totalTradeQuantity: 315,
        lastTradedPrice: 696,
        percentageChange: -0.571428571,
        lastUpdatedDateTime: "2022-12-20 14:52:52.330604",
        previousClose: 700,
      },
    ]);
  };
  const removeStock = (givenID) => {
    setStocks(stocks.filter((a) => a.securityId !== givenID));
  };
  return (
    <div className="App">
      <Counter />
      <div style={{ margin: 20 }}>
        {stocks.map((stock) => (
          <Stock key={stock.securityId} {...stock} />
        ))}
      </div>
      <AiOutlinePlusCircle color={"Black"} size={33} onClick={addStock} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
