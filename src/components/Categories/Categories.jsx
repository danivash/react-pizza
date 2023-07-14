import React, { useState } from 'react'
import classes from "./Categories.module.scss"
import Sort from '../Sort/Sort'

const Categories = () => {

  const [active, setActive] = useState(0);
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
            onClick={() => setActive(index)}
            key={index}
            className={active === index ? classes.active : ""}
          >
            {category}
          </li>
        ))}
      </ul>
      <Sort />
    </div>
  );
}

export default Categories