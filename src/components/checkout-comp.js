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




export default class Wishlist extends Component {
    render() {
        return (

            <div>


                <div class="breadcrumbs">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="bread-inner">
                                    <ul class="bread-list">
                                        <li><a href="index1.html">Home<i class="ti-arrow-right"></i></a></li>
                                        <li class="active"><a href="blog-single.html">Checkout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="shop checkout section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-12">
                                <div class="checkout-form">
                                    <h2>Make Your Checkout Here</h2>
                                    <p>Please register in order to checkout more quickly</p>

                                    <form class="form" method="post" action="#">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>First Name<span>*</span></label>
                                                    <input type="text" name="name" placeholder="" required="required" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>Last Name<span>*</span></label>
                                                    <input type="text" name="name" placeholder="" required="required" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>Email Address<span>*</span></label>
                                                    <input type="email" name="email" placeholder="" required="required" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>Phone Number<span>*</span></label>
                                                    <input type="number" name="number" placeholder="" required="required" />
                                                </div>
                                            </div>

                                            <div class="col-lg-6 col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>Address<span>*</span></label>
                                                    <input type="text" name="text" placeholder="" required="required" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>Address 2<span></span></label>
                                                    <input type="text" name="text" placeholder="" required="required" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>ZIP<span>*</span><span></span></label>
                                                    <input type="text" name="text" placeholder="" required="required" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-12">
                                                <div class="form-group">
                                                    <label>Country<span>*</span><span></span></label>
                                                    <input type="text" name="text" placeholder="" required="required" />
                                                </div>
                                            </div>

                                        </div>
                                    </form>

                                </div>
                            </div>
                            <div class="col-lg-4 col-12">
                                <div class="order-details">

                                    <div class="single-widget">
                                        <h2>CART  TOTALS</h2>
                                        <div class="content">
                                            <ul>
                                                <li>Sub Total<span>$330.00</span></li>
                                                <li>(+) Shipping<span>$10.00</span></li>
                                                <li class="last">Total<span>$340.00</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="single-widget">
                                        <h2>Payments</h2>
                                        <div class="content">
                                            
                                            <div class="checkbox2">
                                           
                                                <label class="checkbox-inline" ><input  type="checkbox" checked/> Credit card</label>
                                                <label class="checkbox-inline" ><input  type="checkbox" /> Debit card</label>
                                                <label class="checkbox-inline" ><input  type="checkbox" /> PayPal</label>
                                            </div>
                                        </div>
                                    </div>
                               
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <div class="form-group">
                                                <label>Full name on card<span>*</span><span></span></label>
                                                <input type="text" name="text" placeholder="" required="required" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <div class="form-group">
                                                <label>Credit card number<span>*</span><span></span></label>
                                                <input type="text" name="text" placeholder="" required="required" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <div class="form-group">
                                                <label>Expiration<span>*</span><span></span></label>
                                                <input type="text" name="text" placeholder="" required="required" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <div class="form-group">
                                                <label>CVV<span>*</span><span></span></label>
                                                <input type="text" name="text" placeholder="" required="required" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr />


                                    <div class="single-widget get-button">
                                        <div class="content">
                                            <div class="button">
                                                <a href="#" class="btn">proceed to checkout</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


