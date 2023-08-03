import React, { useState } from 'react'
import classes from "./Categories.module.scss"
import Sort from '../Sort/Sort'

const Categories = ({currentCategory, onClickCategory, chosenSort, onClickSort}) => {

  const categories = [
  'All',  
  'Meat',
  'Vegetarian',
  'Grill',
  'Spicy',
  'Closed'
  ]

  return (
    <div className={classes.categories}>
      <ul>
        {categories.map((category, index) => (
          <li
            onClick={() => onClickCategory(index)}
            key={index}
            className={currentCategory === index ? classes.active : ""}
          >
            {category}
          </li>
        ))}
      </ul>
      <Sort chosenSort={chosenSort} onClickSort={onClickSort}/>
    </div>
  );
}

export default Categories