import { useState } from "react";

import "./App.css";
import CoffeeList from "./component/CoffeeList";

function App() {
  const [filter, setFilter] = useState("all");
  return (
    <div className="app">
      <div className="container">
        <div className="description">
          <h1>Our Collection</h1>
          <p>
            Introducing our Coffee Collection, a selection of unique coffees
            <br /> from different roast types and origins, expertly roasted in
            small
            <br /> batches and shipped fresh weekly.
          </p>
        </div>
        <div className="filter-buttons">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            {" "}
            All Products{" "}
          </button>
          <button
            className={filter === "available" ? "active" : ""}
            onClick={() => setFilter("available")}
          >
            {" "}
            Available Now{" "}
          </button>
        </div>
        <CoffeeList filter={filter} />
      </div>
    </div>
  );
}

export default App;
