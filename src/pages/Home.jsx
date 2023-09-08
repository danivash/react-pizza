import React, { useContext, useEffect, useRef, useState } from "react";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import LoadingItem from "../components/LoadingItem/LoadingItem";
import Categories from "../components/Categories/Categories";
import classes from "../components/PizzaBlock/PizzaBlock.module.scss";
import Sort from "../components/Sort/Sort";
import { Pagination } from "@mui/material";
import { SearchContext } from "../App";
import { useSelector } from "react-redux";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const renderItems = () => {
    const skeletons = [...Array(10)].map((obj, index) => (
      <PizzaBlock
        key={index}
        {...obj} //spread-оператор
        isLoading={isLoading}
      />
    ));
    const pizzas = items.map((obj, index) => (
      <PizzaBlock
        key={index}
        {...obj} //spread-оператор
        isLoading={isLoading}
      />
    ));
    return isLoading ? skeletons : pizzas;
  };

  const selectedCategory = useSelector((state) => state.filter.category);
  const sortedType = useSelector((state) => state.filter.sort);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setIsLoading(true);
    const category = selectedCategory > 0 ? `category=${selectedCategory}` : "";
    const sortBy = `&sortBy=${sortedType.sortBy}`;
    const filter = searchValue ? `&filter=${searchValue.toLowerCase()}` : "";
    fetch(
      `https://64b6bf8cdf0839c97e16113b.mockapi.io/items?&page=${currentPage}&limit=4&${category}${sortBy}${filter}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0); //
  }, [selectedCategory, sortedType, searchValue, currentPage]);

  return (
    <div className={classes.wrapper}>
      <Categories />
      <ScrollToTop />

      {/* finish render current title of category */}
      <h1 style={{ marginLeft: "105px" }}> All pizzas</h1>

      <div className={classes.home}>{renderItems()}</div>
      <div style={{ display: "flex", justifyContent: "center", padding: 30 }}>
        <Pagination
          count={3}
          onChange={(event, number) => setCurrentPage(number)}
          page={currentPage}
          color="primary"
          size="large"
        />
      </div>
    </div>
  );
};

export default Home;
