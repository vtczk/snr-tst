import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';

import '../css/flex-slider.min.css';
//import '../css/jquery-ui.css';
import '../css/jquery.fancybox.min.css';
import '../css/style.css';
import '../css/themify-icons.css';
import '../css/reset.css';

import Row from "./cart-row-comp";
import RecentPost from "./recent-post-comp"

function Cart() {

    return (

        <div>
            <div class="breadcrumbs">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="bread-inner">
                                <ul class="bread-list">
                                    <li><a href="index1.html">Home<i class="ti-arrow-right"></i></a></li>
                                    <li class="active"><a href="blog-single.html">Cart</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shopping-cart section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">

                            <table class="table shopping-summery">
                                <thead>
                                    <tr class="main-hading">
                                        <th>PRODUCT</th>
                                        <th>NAME</th>
                                        <th class="text-center">UNIT PRICE</th>
                                        <th class="text-center">QUANTITY</th>
                                        <th class="text-center">TOTAL</th>
                                        <th class="text-center"><i class="ti-trash remove-icon"></i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                   <Row/>
                                   <Row/>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">

                            <div class="total-amount">
                                <div class="row">
                                    <div class="col-lg-8 col-md-5 col-12">
                                        <div class="left">
                                            
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-7 col-12">
                                        <div class="right">
                                            <ul>
                                                <li>Cart Subtotal<span>$330.00</span></li>
                                                <li>Shipping<span>Free</span></li>
                                               
                                                <li class="last">You Pay<span>$310.00</span></li>
                                            </ul>
                                            <div class="button5">
                                                <a href="#" class="btn">Checkout</a>
                                                <a href="#" class="btn">Continue shopping</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cart;


