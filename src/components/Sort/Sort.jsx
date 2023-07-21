import React, { useState } from "react";
import classes from "./Sort.module.scss";
const Sort = () => {
  const [visible, setVisible] = useState(false);
  const [choseSortIndex, setChoseSortIndex] = useState(0);
  const listSortBy = ['popularity', 'price', 'A-Z'];
  // const rootClass = [classes.sortOptions]
  // if(visible) {
  //     rootClass.push(classes.sortOptionsActive)
  // }
    const openAndChooseSort = (index) => {
      setChoseSortIndex(index);
      setVisible(!visible); 
    }

  return (
    <div className={classes.sort}>
      <div className={classes.leftPart}>
        <img
          className={visible && classes.rotate}
          src="image/Sort_vector.svg"
          alt="sort by"
        />
        <b>Sort by: </b>
        <span onClick={() => setVisible(!visible)}>
          {listSortBy[choseSortIndex]}
        </span>
      </div>
      {visible && (
        <ul className={classes.sortOptions}>
          {listSortBy.map((sort, index) => (
            <li key={index} onClick={() => openAndChooseSort(index)}>
              {sort}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
