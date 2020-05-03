import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MainPage from './HomePage'
import WPage from './WishlistPage'
import LoginPage from './LoginPage'
import CreatePage from './CreateAccountPage'
import Cart from './CartPage'
import Checkout from './CheckoutPage'
import Category from './CategoryPage'
import SinglePage from './SinglePage'
import Account from './AccountPage'

ReactDOM.render(
  <React.StrictMode>
 <Account/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
