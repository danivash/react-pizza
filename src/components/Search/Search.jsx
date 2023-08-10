import React, { useContext } from "react";
import classes from "./Search.module.scss";
import { SearchContext } from "../../App";
const Search = () => {
  const {searchValue, setSearchValue} = useContext(SearchContext);  
  return (
    <div className={classes.root}>
      <svg 
    className={classes.search}
      viewBox="0 0 32 32" >
        <title />
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
      <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} className={classes.input} placeholder="search pizza..." />
   {searchValue && <img onClick={() => setSearchValue('')} className={classes.close} src="./image/close.svg" alt="close"/>} 
    </div>
  );
};

export default Search;
