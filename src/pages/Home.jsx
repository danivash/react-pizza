import React, { useEffect, useRef, useState } from "react";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import LoadingItem from "../components/LoadingItem/LoadingItem";
import Categories from "../components/Categories/Categories";
// import pizzas from '../assets/dataPizzas.json';
import classes from "../components/PizzaBlock/PizzaBlock.module.scss";
import Sort from "../components/Sort/Sort";

const Home = ({searchValue, setSearchValue}) => {

  const renderItems = () => {
    const skeletons = [...Array(10)].map((obj, index) => (
      <PizzaBlock
        key={index}
        {...obj} //spread-оператор
        isLoading={isLoading}
      />
    ));
    const pizzas = items.filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase())).map((obj, index) => (
      <PizzaBlock
        key={index}
        {...obj} //spread-оператор
        isLoading={isLoading}
      />
    ));
    return (isLoading ? skeletons : pizzas);
  };


  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [sortedType, setSortedType] = useState({sort: "popularity", index: 0 });

  useEffect(() => {
    setIsLoading(true);
    // request -- getting data of pizza for render
    // getDataForChosenCategory(selectedCategory);  
    // getData();
    fetch(`https://64b6bf8cdf0839c97e16113b.mockapi.io/items?${selectedCategory > 0 ? `category=${selectedCategory}` : ''}&${`sortBy=${sortedType.sort}`}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setItems(data);
      setIsLoading(false);
    });
    window.scrollTo(0, 0); //
 


  }, [selectedCategory, sortedType]);
 
  return (
    <div className={classes.wrapper}>
      {/* <div style={{display: "flex"}}> */}
      <Categories
        currentCategory={selectedCategory}
        onClickCategory={(index) => setSelectedCategory(index)} 
        chosenSort={sortedType}
        onClickSort={(index) => setSortedType(index)}
      />
      {/* <Sort/> */}
      {/* </div> */}

      <h1 style={{ marginLeft: "105px" }}> All pizzas</h1>

      
      <div className={classes.home}>{renderItems()}</div>
    </div>
  );
};

export default Home;
