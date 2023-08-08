import React from "react";
import MyButton from "../../components/UI/button/MyButton";
import classes from "./Basket.module.scss";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import { Link } from "react-router-dom";

const Basket = ({ items }) => {
  console.log(items);
  return (
    <div className={classes.wrapper}>
      <div className={classes.basket_header}>
        <div className={classes.basket_header__left}>
          <img src="./image/basket.png" alt="basket" />
          <h1>Basket</h1>
        </div>

        <div className={classes.basket_header__right}>
          <img src="./image/trash.svg" alt="trash basket" />
          <span>clear basket</span>
        </div>
      </div>
      {items.map((item, i) => (
        <div className={classes.content} key={i}>
          <img src={item.imageUrl} alt="pizza" />
          <div
            style={{
              display: "block",
              marginBottom: 10,
              textAlign: "center",
              width: "220px",
            }}
          >
            <h4 style={{ marginBottom: 0 }}>{item.title}</h4>
            <span>describing pizza</span>
          </div>
          <div>
            <button className={classes.button_for_count}>
              <b>-</b>
            </button>
            <b style={{ marginTop: "20px" }}>count</b>
            <button className={classes.button_for_count}>
              <b>+</b>
            </button>
          </div>
          <b style={{ width: 30 }}>{item.price}$</b>
          <button className={classes.button_remove}>
            <b>x</b>
          </button>
        </div>
      ))}
      <div className={classes.footer}>
        <h3>
          Your order is <b>3</b>
        </h3>
        <h3>
          Order sum: <b>90$</b>
        </h3>
      </div>
      <div className={classes.footer__buttons}>
        <Link to="/">
          <MyButton content={"Go back"} />
        </Link>
        <MyButton content={"Pay now"} />
      </div>
    </div>
  );
};

export default Basket;
