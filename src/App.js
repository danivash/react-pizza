import { createContext, useEffect, useState } from "react";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import "./index.scss";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Basket from "./pages/Basket/Basket";
import pizzaForBasket from './assets/dataPizzas.json' // temporary
import { useDispatch, useSelector } from "react-redux";




export const SearchContext = createContext(null);

function App() {

  const [searchValue, setSearchValue] = useState('');
  
  

  return (
    <div className="wrapper">
    
    
    <SearchContext.Provider value={{searchValue, setSearchValue}}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="basket"
          // element={<Basket items={items}/>}
          element={<Basket items={pizzaForBasket}/>} // items also temporary

        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </SearchContext.Provider>

    </div>
  );
}

export default App;
