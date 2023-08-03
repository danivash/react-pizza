import React, { useEffect, useState } from "react";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import LoadingItem from "../components/LoadingItem/LoadingItem";
import Categories from "../components/Categories/Categories";
// import pizzas from '../assets/dataPizzas.json';
import classes from "../components/PizzaBlock/PizzaBlock.module.scss";
import Sort from "../components/Sort/Sort";

const Home = () => {
  const renderItems = () => {
    return (isLoading ? [...Array(10)] : items).map((obj, index) => (
      <PizzaBlock
        key={index}
        {...obj} //spread-оператор
        isLoading={isLoading}
      />
    ));
  };
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [sortedType, setSortedType] = useState({sort: "popularity", index: 0 });
  const getDataForChosenCategory = (category) => {
    setIsLoading(true);
    fetch(
      // `https://64b6bf8cdf0839c97e16113b.mockapi.io/items?${category > 0 ? `category=${category}` : ''}` 
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
        // console.log(data);
        setIsLoading(false);
      });
    console.log("categories data reload");
  };

  // const callback = (category) => {
  //   setSelectedCategory(category)
  // }

  // const getData = () => {
  //   setIsLoading(true);
  //   fetch(`https://64b6bf8cdf0839c97e16113b.mockapi.io/items?${category > 0 ? `category=${category}` : ''}`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setItems(data);
  //       setIsLoading(false);
  //     });
  //   console.log("all data reload");
  // };
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
