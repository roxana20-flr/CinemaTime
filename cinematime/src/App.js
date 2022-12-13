import { HashRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import './App.css';
import MainPage from "./components/pages/main_page/MainPage";
import Offers from "./components/pages/offers/Offers";
import Tickets from './components/pages/tickets/Tickets';
import Cart from './components/pages/cart/Cart';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import React, { Component, useState, useEffect } from "react";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import Context from "./Context";
import  produse  from './components/pages/tickets/TicketData';
import data from './data';
// import commerce from './lib/Commerce';

// class App  extends Component {
  function App () {
    
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: null,
  //     cart: {},
  //     products: []
  //   };
  //   this.routerRef = React.createRef();
  // };

  // async componentDidMount() {
  //   let user = localStorage.getItem("user");
  //   let cart = localStorage.getItem("cart");

  //   const products = await axios.get('http://localhost:3000/#/tickets');
  //   user = user ? JSON.parse(user) : null;
  //   cart = cart? JSON.parse(cart) : {};

  //   this.setState({ user,  products: products.data, cart });
  // }

  // login = async (email, password) => {
  //   const res = await axios.post(
  //     'http://localhost:3000/login',
  //     { email, password },
  //   ).catch((res) => {
  //     return { status: 401, message: 'Unauthorized' }
  //   })

  //   if(res.status === 200) {
  //     const { email } = jwt_decode(res.data.accessToken)
  //     const user = {
  //       email,
  //       token: res.data.accessToken,
  //       accessLevel: email === 'admin@example.com' ? 0 : 1
  //     }

  //     this.setState({ user });
  //     localStorage.setItem("user", JSON.stringify(user));
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // logout = e => {
  //   e.preventDefault();
  //   this.setState({ user: null });
  //   localStorage.removeItem("user");
  // };

  // addProduct = (product, callback) => {
  //   let products = this.state.products.slice();
  //   products.push(product);
  //   this.setState({ products }, () => callback && callback());
  // };

  // addToCart = cartItem => {
  //   let cart = this.state.cart;
  //   if (cart[cartItem.id]) {
  //     cart[cartItem.id].amount += cartItem.amount;
  //   } else {
  //     cart[cartItem.id] = cartItem;
  //   }
  //   if (cart[cartItem.id].amount > cart[cartItem.id].product.stock) {
  //     cart[cartItem.id].amount = cart[cartItem.id].product.stock;
  //   }
  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   this.setState({ cart });
  // };

  // removeFromCart = cartItemId => {
  //   let cart = this.state.cart;
  //   delete cart[cartItemId];
  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   this.setState({ cart });
  // };

  // clearCart = () => {
  //   let cart = {};
  //   localStorage.removeItem("cart");
  //   this.setState({ cart });
  // };

  // checkout = () => {
  //   if (!this.state.user) {
  //     this.routerRef.current.history.push("/login");
  //     return;
  //   }

  //   const cart = this.state.cart;

  //   const products = this.state.products.map(p => {
  //     if (cart[p.name]) {
  //       p.stock = p.stock - cart[p.name].amount;

  //       axios.put(
  //         `http://localhost:3000/#/tickets/${p.id}`,
  //         { ...p },
  //       )
  //     }
  //     return p;
  //   });

  //   this.setState({ products });
  //   this.clearCart();
  // };


  // ALT EXEMPLU -----------

  // const [merchant, setMerchant] = useState({});
  // const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState({})


  // useEffect(() => {
  //   fetchMerchantDetails();
  //   fetchProducts();
  //   fetchCart();
  // }, []);

 
  //  const fetchMerchantDetails = () => {
  //   commerce.merchants.about().then((merchant) => {
  //     setMerchant(merchant);
  //   }).catch((error) => {
  //     console.log('There was an error fetching the merchant details', error)
  //   });
  // }

  
  // const fetchProducts = () => {
  //   commerce.products.list().then((products) => {
  //     setProducts(products.data);
  //   }).catch((error) => {
  //     console.log('There was an error fetching the products', error)
  //   });
  // }


  // const fetchCart = () => {
  //   commerce.cart.retrieve().then((cart) => {
  //     setCart(cart);
  //   }).catch((error) => {
  //     console.log('There was an error fetching the cart', error);
  //   });
  // }

  //  const handleAddToCart = (productId, quantity) => {
  //   commerce.cart.add(productId, quantity).then((item) => {
  //     setCart(item.cart);
  //   }).catch((error) => {
  //     console.error('There was an error adding the item to the cart', error);
  //   });
  // }

  
  // const handleRemoveFromCart = (lineItemId) => {
  //   commerce.cart.remove(lineItemId).then((resp) => {
  //     setCart(resp.cart);
  //   }).catch((error) => {
  //     console.error('There was an error removing the item from the cart', error);
  //   });
  // }
  
 
  // const handleUpdateCartQty = (lineItemId, quantity) => {
  //   commerce.cart.update(lineItemId, { quantity }).then((resp) => {
  //     setCart(resp.cart);
  //   }).catch((error) => {
  //     console.log('There was an error updating the cart items', error);
  //   });
  // }

  
  // const handleEmptyCart = () => {
  //   commerce.cart.empty().then((resp) => {
  //     setCart(resp.cart);
  //   }).catch((error) => {
  //     console.error('There was an error emptying the cart', error);
  //   });
  // }

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

  // render() {
    return (
    <div className="App">
      {/* <Context.Provider
        value={{
          ...this.state,
          removeFromCart: this.removeFromCart,
          addToCart: this.addToCart,
          login: this.login,
          addProduct: this.addProduct,
          clearCart: this.clearCart,
          checkout: this.checkout
        }}
      > */}
       <Router > {/*//ref={this.routerRef} */}
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
      {/* </Context.Provider> */}
    </div>
  );
    //  }
}

export default App;
