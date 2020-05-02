import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/header-comp"
import HeaderLogin from "./components/header-login-comp"
import Footer from "./components/footer-comp"
import Body from "./components/main-body-comp"
import Login from "./components/login-comp"


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
