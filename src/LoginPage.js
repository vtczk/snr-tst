import React from 'react';
import logo from './logo.svg';
import './HomePage.css';

import Header from "./components/header-comp"
import HeaderLogin from "./components/header-login-comp"
import Footer from "./components/footer-comp"
import Categories from "./components/main-body-comp"
import Login from "./components/login"
import CreateAccount from "./components/create-account"


function LoginPage() {
  return (
    <div className="App">
        <Header/>
        <Login/>
        <Footer/>
    </div>
  );
}

export default LoginPage;
