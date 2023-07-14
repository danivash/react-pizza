import React, { useState } from "react";
import classes from "./PizzaBlock.module.scss";
import MyButton from "../UI/button/MyButton";

const PizzaBlock = ({title, imgUrl, price, sizes, types}) => {
    const typeNames = ['thin', 'thick']
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);
    return (
    <div className={classes.content}>
      <img src={imgUrl} alt="image" />
      <h4>{title}</h4>
      <div className={classes.selectSection}>
        <ul>
        {types.map((type) => (
            <li onClick={() => setActiveType(type)} className={activeType === type ? classes.active : ''} >{typeNames[type]}</li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li onClick={() => setActiveSize(index)} className={index === activeSize ? classes.active : ''}>{size} cm</li>
          ))}
        </ul>
      </div>
      <div className={classes.footer}>
      <span>from {price}$</span>
      <MyButton content={"add"}/>
      </div>
    </div>
  );
};

export default PizzaBlock;
