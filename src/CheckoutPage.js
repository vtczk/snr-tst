import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/header-comp"
import HeaderLogin from "./components/header-login-comp"
import HeaderInner from "./components/header-inner"
import Footer from "./components/footer-comp"
import Body from "./components/main-body-comp"
import Login from "./components/login-comp"
import CreateAccount from "./components/create-account-comp"
import Wishlist from "./components/wishlist-comp"
import Cart from "./components/cart-comp"
import Checkout from "./components/checkout-comp"


function WishlistPage() {
  return (
    <div className="App">
        <HeaderInner/>
        <Checkout/>
        <Footer/>
    </div>
  );
}

export default WishlistPage;