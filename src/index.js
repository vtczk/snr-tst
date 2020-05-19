import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import CategoriesPage from './CategoriesPage'
import LoginPage from './LoginPage'
import Register from './RegisterPage'
import Cart from './CartPage'
import Checkout from './CheckoutPage'
import HomePage from './HomPage'
import ProductDetailsPage from './ProductDetailsPage'
import UserPage from './UserPage'
import Wishlist from './WishlistPage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {GlobalContext} from "./components/global-context";
import AddReview from "./components/add-review";

class App extends React.Component {
    constructor(props) {
        super(props);
        // localStorage.clear();
        this.state = {
            user: localStorage.getItem("user"),
            setUser: this.setUser,
            cart: this.getFromCart() !== null ? this.getFromCart() : [],
            addToCart: this.addToCart,
            deleteFromCart: this.deleteFromCart,
            setPrice: this.setPrice,
            getCurrentPrice: this.getCurrentPrice,
    }
        ;


    }

    setUser = (usr) => {
        console.log("set function launched");
        localStorage.setItem("user", usr);
        this.setState(({
            user: usr
        }));
    };

    getFromCart() {
        return JSON.parse(localStorage.getItem("cart"))
    }

    addToCart = (product) => {
        let index = this.state.cart.findIndex(val => val.id === product.id);
        if (index === -1) {
            this.setState(({
                cart: [...this.state.cart, product]
            }), () =>
                localStorage.setItem("cart", JSON.stringify(this.state.cart)));
        }

    };

    deleteFromCart = (product) => {
        this.setState(({
            cart: [...this.state.cart].filter(val => val.id !== product.id)
        }), () =>
            localStorage.setItem("cart", JSON.stringify(this.state.cart)));
    };

    setPrice = (price) => {
        localStorage.setItem("price", price)
    };

    getCurrentPrice = () => {
        let price = localStorage.getItem("price");
        return price !== undefined ? price : 0
    };
    render() {
        return (
            <GlobalContext.Provider value={this.state}>
                <Router>
                    <Switch>

                        <Route path={"/login"} component={LoginPage}/>
                        <Route path={"/register"} component={Register}/>
                        <Route path={"/categories/:id"} component={CategoriesPage}/>
                        <Route path={"/user/details"} component={UserPage}/>
                        <Route path={"/wishlist"} component={Wishlist}/>
                        <Route path={"/cart/checkout"} component={Checkout}/>
                        <Route path={"/cart"} component={Cart}/>
                        <Route path={"/product/:id"} component={ProductDetailsPage}/>

                        <Route path={"/"} component={HomePage}/>

                    </Switch>
                </Router>
            </GlobalContext.Provider>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


serviceWorker.unregister();
