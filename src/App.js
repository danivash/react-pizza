import { useEffect, useState } from "react";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import "./index.scss";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Basket from "./pages/Basket/Basket";

import pizzaForBAsket from './assets/dataPizzas.json' // temporary
function App() {

  const [searchValue, setSearchValue] = useState('');
  
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>

      <Routes>
        <Route
          path="/"
          element={<Home searchValue={searchValue} setSearchValue={setSearchValue}/>}
        />
        <Route
          path="basket"
          // element={<Basket items={items}/>}
          element={<Basket items={pizzaForBAsket}/>} // items also temporary

        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
