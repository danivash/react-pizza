import React from "react";
import classes from "./Header.module.scss";
import MyButton from "../UI/button/MyButton";
import { Link } from "react-router-dom";
import MyInput from "../UI/input/MyInput";

const Header = ({searchValue, setSearchValue}) => {
  return (
    <>
      <div className={classes.header}>
        <Link to="/">
          <div className={classes.left_header}>
            <img src="image/logo.png" alt="logo" />
            <div>
              <h1>React Pizza</h1>
              <p>The best pizza in the universe</p>
            </div>
          </div>
        </Link>
        <MyInput searchValue={searchValue} setSearchValue={setSearchValue}/>
        <Link to="basket">
          <MyButton content={"add"} />
        </Link>
      </div>
      <hr />
    </>
  );
};

export default Header;
