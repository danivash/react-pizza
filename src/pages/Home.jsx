import React from "react";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import pizzas from '../assets/dataPizzas.json';
const Home = () => {
  console.log(pizzas);
  return (
    <>
      <h1 style={{ marginLeft: "64px" }}>All pizzas</h1>
      <div style={{ display: "flex", flexWrap: "wrap", margin: "10px" }}>
        {pizzas.map((obj) => (
          <PizzaBlock
            {...obj} //spread-оператор
          />
        ))}
      </div>
    </>
  );
};

export default Home;
