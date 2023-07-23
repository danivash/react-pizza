import React from "react";
import classes from "./Header.module.scss";
import MyButton from "../UI/button/MyButton";
import { Link } from "react-router-dom";

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

        <MyButton content={"add"} />
      </div>
      <hr />
    </>
  );
};

export default Header;
