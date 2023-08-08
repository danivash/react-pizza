import React, { useState } from "react";
import classes from "./Sort.module.scss";
const Sort = ({ chosenSort, onClickSort }) => {

  const [visible, setVisible] = useState(false);
  // const [choseSortIndex, setChoseSortIndex] = useState(0);
  const listSortBy = [
    { sortRender: "popularity",  sortBy: "rating", index: 0},
    { sortRender: "price",  sortBy: "price", index: 1},
    { sortRender: "A-Z",  sortBy: "title", index: 2 } 
  ];
  const openAndChooseSort = (obj) => {
    onClickSort(obj);
    setVisible(!visible);
  };

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
          {listSortBy[chosenSort.index].sortRender}
        </span>
      </div>
      {visible && (
        <ul className={classes.sortOptions}>
          {listSortBy.map((sortObj, index) => (
            <li key={index} onClick={() => openAndChooseSort(sortObj)}>
              {sortObj.sortRender}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
