import { useEffect, useState } from "react";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import "./index.scss";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Basket from "./pages/Basket/Basket";

function App() {

  // console.log(items);

  return (
    <div className="wrapper">
      <Header />

      {/* <Categories/> */}
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="basket"
          // element={<Basket items={items}/>}
          element={<Basket />}

        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
