import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/header-inner"
import HeaderLogin from "./components/header-login-comp"
import Footer from "./components/footer-comp"

import CreateAccount from "./components/create-account-comp"


function CreatePage() {
  return (
    <div className="App">
        <Header/>
        <CreateAccount/>
        <Footer/>
    </div>
  );
}

export default CreatePage;
