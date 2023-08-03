import React, { useState } from "react";
import classes from "./Sort.module.scss";
const Sort = ({ chosenSort, onClickSort }) => {

  const [visible, setVisible] = useState(false);
  // const [choseSortIndex, setChoseSortIndex] = useState(0);
  const listSortBy = [
    { sort: "popularity", index: 0 },
    { sort: "price", index: 1 },
    { sort: "A-Z", index: 2 } 
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
          {listSortBy[chosenSort.index].sort}
        </span>
      </div>
      {visible && (
        <ul className={classes.sortOptions}>
          {listSortBy.map((sortObj, index) => (
            <li key={index} onClick={() => openAndChooseSort(sortObj)}>
              {sortObj.sort}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
