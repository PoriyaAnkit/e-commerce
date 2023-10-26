import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Catagories from './Catagories';
import Product from './Product';
import { Routes, Route } from "react-router-dom"
import Cart from './Cart';

function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path="/" element={ <Catagories/> } />
      <Route path="product/:id" element={ <Product/> } />
      <Route path="cart" element={ <Cart/> } />
    </Routes>
  </>
  );
}

export default App;
