import React from 'react';
import logo from './logo.svg';
import './HomePage.css';

import Header from "./components/header-comp"
import Footer from "./components/footer-comp"
import Checkout from "./components/checkout"


function WishlistPage() {
  return (
    <div className="App">
        <Header/>
        <Checkout/>
        <Footer/>
    </div>
  );
}

export default WishlistPage;
