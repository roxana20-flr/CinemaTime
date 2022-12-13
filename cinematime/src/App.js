import { HashRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import './App.css';
import MainPage from "./components/pages/main_page/MainPage";
import Offers from "./components/pages/offers/Offers";
import Tickets from './components/pages/tickets/Tickets';
import Cart from './components/pages/cart/Cart';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import React, { Component, useState, useEffect } from "react";
import data from './data';


  function App () {
    
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

    return (
    <div className="App">
       <Router > 
        <Header />
        <Routes>
          <Route path='/' exact element={<MainPage />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/tickets' element={<Tickets products={products} onAdd={onAdd}/>} />
          <Route path='/cart' element={<Cart 
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
