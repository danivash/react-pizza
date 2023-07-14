import React, { useState } from "react";
import classes from './Sort.module.scss'
const Sort = () => {

const [visible, setVisible] = useState(false)

const rootClass = [classes.sortOptions]
if(visible) {
    rootClass.push(classes.sortOptionsActive)
}
    
  return (
    <div className={classes.sort}>
     <button onClick={() => setVisible(true)}>
     <img src="image/Sort_vector.svg" alt="sort by" />
      <span>Sort by: </span>
     </button>
      <ul className={rootClass.join(' ')}>
        <li>hit</li>
        <li>price</li>
        <li>A-Z</li>
      </ul>
    </div>
  );
};

export default Sort;
