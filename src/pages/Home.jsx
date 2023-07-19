import React, { useState } from "react";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import LoadingItem from "../components/LoadingItem/LoadingItem";
// import pizzas from '../assets/dataPizzas.json';


const Home = ({pizzaItems, isLoading}) => {



  const renderItems = () => {
    return(isLoading ? [...Array(10)] : pizzaItems).map((obj, index) => (
      <PizzaBlock
      key={index}
        {...obj} //spread-оператор
        isLoading={isLoading}
      />
    ))
  }

  console.log(pizzaItems);
  return (
    <>
      

      <h1 style={{ marginLeft: "64px" }}>All pizzas</h1>
      <div style={{ display: "flex", flexWrap: "wrap", margin: "10px" }}>
    
      {renderItems()}
    
        
      </div>
    </>
  );
};

export default Home;
