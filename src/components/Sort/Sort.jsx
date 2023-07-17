import React, { useState } from "react";
import classes from "./Sort.module.scss";
const Sort = () => {
  const [visible, setVisible] = useState(false);

  // const rootClass = [classes.sortOptions]
  // if(visible) {
  //     rootClass.push(classes.sortOptionsActive)
  // }

  return (
    <div className={classes.sort}>
      <div className={classes.leftPart}>
        <img src="image/Sort_vector.svg" alt="sort by" />
        <b>Sort by: </b>
        <span onClick={() => setVisible(!visible)}>popularity</span>
      </div>
      {visible && (
          <ul className={classes.sortOptions}>
            <li>popularity</li>
            <li>price</li>
            <li>A-Z</li>
          </ul>
      )}
    </div>
  );
};

export default Sort;
