import React from "react";
import classes from "./MyButton.module.scss";
const MyButton = ({ content}) => {
  return (
    <button className={classes.MyButton}>
      <b>{content}</b>
    </button>
  );
};

export default MyButton;
