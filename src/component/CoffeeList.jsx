import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./CoffeeList.css";

function CoffeeList({ filter }) {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setCoffeeData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const filterCoffee = coffeeData.filter((coffee) => {
    if (filter === "all") {
      return true;
    }
    if (filter === "available") {
      return coffee.available;
    }
  });
  console.log("filter value:", filter)
  console.log("Coffee data:", coffeeData);
  return (
    <div className="coffee-list">
      {filterCoffee.map((coffee) => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
}

export default CoffeeList;
