import React from "react";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.left_header}>
        <img src="./image/logo.png" alt="logo" />
        <div>
          <h1>React Pizza</h1>
          <p>The best pizza in the universe</p>
        </div>
      </div>
        <button className={classes.button} style={{marginRight: "20px", width: "150px"}} >
        <a href="#basket" >

          <b>55 $</b>
            <b>|</b>   
          <b> 2</b>
          </a>
        </button>
    </div>
  );
};

export default Header;
