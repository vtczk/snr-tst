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
                                    <h3 class="title">Categories</h3>
                                    <ul class="categor-list">
                                        <li><a href="#">Phones</a></li>
                                        <li><a href="#">Photography</a></li>
                                        <li><a href="#">Headphones</a></li>
                                        <li><a href="#">Home audio</a></li>
                                        <li><a href="#">Video Games</a></li>
                                        <li><a href="#">Smart Home</a></li>
                                        <li><a href="#">Office Electronics</a></li>
                                        <li><a href="#">Accessories</a></li>
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

                                                                    <div class="col-lg-4 col-md-6 col-12">
                                                                        <div class="product-img">
                                                                            <a href="product-details.html">
                                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />

                                                                            </a>

                                                                        </div>

                                                                    </div>

                                                                    <div class="col-md-7 col-sm-7 col-xs-12">
                                                                        <div class="single-product-info">
                                                                            <h3 class="text-black-1">Product Name </h3>
                                                                            <h6 class="brand-name-2">Brand name</h6>

                                                                            <hr />

                                                                            <div class="single-pro-color-rating reviews2">

                                                                                <div class="pro-rating sin-pro-rating f-right">

                                                                                    <span class="text-black-5">Ratings</span>

                                                                                    <div class="content">
                                                                                        <ul class="reviews2">


                                                                                            <span class="fa fa-star checked "></span>
                                                                                            <span class="fa fa-star checked"></span>
                                                                                            <span class="fa fa-star "></span>
                                                                                            <span class="fa fa-star"></span>
                                                                                            <span class="fa fa-star"></span>


                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <hr />

                                                                            <div class="plus-minus-pro-action clearfix">
                                                                                <div class="sin-plus-minus f-left clearfix single-product-info">
                                                                                    <p class="single-product-info">Quantity</p>
                                                                                    <input type="text" name="quant[1]" class=" inputProduct input-number single-product-info" data-min="1" data-max="100" value="1" />



                                                                                </div>
                                                                                <div class="sin-pro-action f-right">
                                                                                    <ul class="action-button">
                                                                                        <li>
                                                                                            <a href="#" title="Wishlist" tabindex="0"><i class="zmdi zmdi-favorite"></i></a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#" data-toggle="modal" data-target="#productModal" title="Quickview" tabindex="0"><i class="zmdi zmdi-zoom-in"></i></a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#" title="Compare" tabindex="0"><i class="zmdi zmdi-refresh"></i></a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#" title="Add to cart" tabindex="0"><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                            <hr />

                                                                            <h3 class="pro-price">Price: $ 869.00</h3>

                                                                            <hr />
                                                                            <div>

                                                                                <div class="single-widget get-button sign">
                                                                                    <div class="content">
                                                                                        <div class="button">
                                                                                            <a href="#" class="btn">Buy Now</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                <div class="row">
                                                                    <div class="col-md-12">

                                                                        <hr />
                                                                        <div class="single-product-tab">
                                                                            <ul class="reviews-tab mb-20">
                                                                                <li class="active" ><a href="#description">description</a></li>

                                                                                <li ><a href="#reviews" >reviews</a></li>
                                                                                <li ><a href="#information" >Add review</a></li>
                                                                            </ul>
                                                                            <div class="tab-content">


                                                                                <AddReview />


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

