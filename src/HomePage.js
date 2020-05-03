import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/header-comp"
import Footer from "./components/footer-comp"
import Body from "./components/main-body-comp"
import W from "./components/wishlist-comp"

function MainPage() {
  return (
    <div className="App">
        <Header/>
        <Body/>
        <Footer/>
    </div>
  );
}

export default MainPage;
