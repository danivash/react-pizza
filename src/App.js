import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import './index.scss';
import Home from './pages/Home';
function App() {
  return (
    <div className="wrapper">
    <Header/>
    <Categories/>
    <Home/>

    </div>
  );
}

export default App;
