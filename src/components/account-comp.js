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


import RecentPost from "./recent-post-comp";
import Product from "./product-comp";
import Description from "./product-desc";
import Reviews from "./product-reviews"
import AddReview from "./add-review"

function details() {

    return (

        <div>

            <section class="product-area shop-sidebar shop section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-12">
                            <div class="shop-sidebar">

                                <div class="single-widget category">
                                    <h3 class="title">My account</h3>
                                    <ul class="categor-list">
                                        <li><a href="#">My data</a></li>
                                        <li><a href="#">Logout</a></li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-9 col-md-8 col-12">
                            <div class="row">
                                <div class="shopping-cart" >
                                    <div class="container">

                                        <div class="shop-section mb-80">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="product-pos">
                                                        <div class="col-md-9 col-xs-12">
                                                            <div class="single-product-area mb-80">
                                                                <div class="row">
                                                                    <div class="single-product-info">

                                                                        <section class="shop checkout section">

                                                                            <div class="col-lg-12 col-12">
                                                                                <div class="checkout-form">
                                                                                    <h2>My data</h2>
                                                                                    <br />
                                                                                    <hr />

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
                                                                        </section>

                                                                        <hr />




                                                                        <div>
                                                                            <div class="single-widget get-button sign">
                                                                                <div class="content">
                                                                                    <div class="button">

                                                                                        <a href="#" class="btn">Edit</a>
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
                                            </div>
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
export default details;

