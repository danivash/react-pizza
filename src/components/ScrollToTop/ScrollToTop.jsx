import React, { useCallback, useEffect, useState } from "react";
import classes from "../UI/button/MyButton.module.scss";
import cl from "./ScrollToTop.module.scss"
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    window.scrollY < 80 ? setIsVisible(false) : setIsVisible(true);
  }, []);

  useEffect(() => {
    const addScrollListener = () => {
      window.addEventListener("scroll", handleScroll);
    };

    const removeScrollListener = () => {
      window.removeEventListener("scroll", handleScroll);
    };

    addScrollListener(); // Добавляем слушатель при монтировании
    console.log("effect works");
    return removeScrollListener; // Удаляем слушатель при размонтировании
  }, [handleScroll]);

  return (
    <div className={cl.scrollAdaptive}>
      <button
        className={`${classes.MyButton} ${cl.scrollToTop} ${
          isVisible ? "" : classes.visible
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <b style={{ fontSize: "35px" }}>⇡</b>
      </button>
    </div>
  );
};
// ↑⇧⇡ ⇑
export default ScrollToTop;
