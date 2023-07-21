import { useEffect, useState } from "react";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import "./index.scss";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getData = () => {
    fetch("https://64b6bf8cdf0839c97e16113b.mockapi.io/items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    setIsLoading(true);
    // request -- getting data of pizza for render
    getData();
  }, []);

  console.log(items);

  return (
    <div className="wrapper">
      <Header />

      {/* <Categories/> */}
      <Routes>
        <Route
          path="/"
          element={<Home pizzaItems={items} isLoading={isLoading} />}
        />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
