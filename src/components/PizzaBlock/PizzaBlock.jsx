import React, { useState } from "react";
import classes from "./PizzaBlock.module.scss";
import MyButton from "../UI/button/MyButton";
import LoadingItem from "../LoadingItem/LoadingItem";

const PizzaBlock = ({title, imageUrl, price, sizes, types, isLoading=true}) => {
    const typeNames = ['thin', 'thick']
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);
    return (
      <>
        {isLoading ? (
          <LoadingItem />
        ) : (
          <div className={classes.content}>
            <img src={imageUrl} alt="image" />
            <h4>{title}</h4>
            <div className={classes.selectSection}>
              <ul>
                {types.map((type, i) => (
                  <li
                    key={i}
                    onClick={() => setActiveType(type)}
                    className={activeType === type ? classes.active : ""}
                  >
                    {typeNames[type]}
                  </li>
                ))}
              </ul>
              <ul>
                {sizes.map((size, index) => (
                  <li
                    key={index}
                    onClick={() => setActiveSize(index)}
                    className={index === activeSize ? classes.active : ""}
                  >
                    {size} cm
                  </li>
                ))}
              </ul>
            </div>
            <div className={classes.footer}>
              <span>from {price}$</span>
              <MyButton className={classes.MyButton} content={"add"} />
            </div>
          </div>
        )}
      </>
    );
};

export default PizzaBlock;
