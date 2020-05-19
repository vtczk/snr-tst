import React from 'react';
import logo from './logo.svg';
import './HomePage.css';

import Header from "./components/header-comp"
import Footer from "./components/footer-comp"
import Categories from "./components/main-body-comp"
import ProductListElement from "./components/product-comp"

function AppPrev() {
  return (
    <div className="App">
        <Header/>
       
        <Categories/>
        <Footer/>
    </div>
  );
}

export default AppPrev;
