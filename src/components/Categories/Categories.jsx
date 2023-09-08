import React, { useState } from "react";
import classes from "./Categories.module.scss";
import Sort from "../Sort/Sort";
import { useDispatch, useSelector } from "react-redux";
import { ChangeCategory } from "../../redux/filteredSlice";

const categories = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"];
const Categories = ({ chosenSort, onClickSort }) => {
  const category = useSelector((state) => state.filter.category);
  const dispatch = useDispatch(null);

  return (
    <div className={classes.categories}>
      <ul>
        {categories.map((choseCategory, index) => (
          <li
            onClick={() => dispatch(ChangeCategory(index))}
            key={index}
            className={category === index ? classes.active : ""}
          >
            {choseCategory}
          </li>
        ))}
      </ul>
      <Sort />
    </div>
  );
};

export default Categories;
