import React from 'react';
import logo from './logo.svg';
import './HomePage.css';

import Header from "./components/header-comp"
// import Header from "./components/header-login-comp"
// import Header from "./components/header-inner"
import Footer from "./components/footer-comp"
import Cart from "./components/cart"


function WishlistPage() {
  return (
    <div className="App">
        <Header/>
        <Cart/>
        <Footer/>
    </div>
  );
}

export default WishlistPage;
