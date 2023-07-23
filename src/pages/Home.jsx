import React, { useState } from "react";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import LoadingItem from "../components/LoadingItem/LoadingItem";
import Categories from "../components/Categories/Categories";
// import pizzas from '../assets/dataPizzas.json';
import classes from '../components/PizzaBlock/PizzaBlock.module.scss'

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
    <div className={classes.wrapper}>
      <Categories/>

      <h1 style={{ marginLeft: "25px" }}>All pizzas</h1>
      <div  className={classes.home}>
    
      {renderItems()}
    
        
      </div>
    </div>
  );
};

export default Home;
