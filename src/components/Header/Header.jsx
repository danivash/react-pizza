import React from "react";
import classes from "./Header.module.scss";
import MyButton from "../UI/button/MyButton";
import { Link } from "react-router-dom";
import Search from "../Search/Search";


const Header = () => {
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
        <Search/>
        <Link to="basket">
          <MyButton content={"add"} />
        </Link>
      </div>
      <hr />
    </>
  );
};

export default Header;
