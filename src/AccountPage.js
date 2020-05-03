import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/header-inner"
import HeaderLogin from "./components/header-login-comp"
import Footer from "./components/footer-comp"
import Body from "./components/main-body-comp"
import Login from "./components/login-comp"
import Account from "./components/account-comp"


function LoginPage() {
  return (
    <div className="App">
        <Header/>
        <Account/>
        <Footer/>
    </div>
  );
}

export default LoginPage;
