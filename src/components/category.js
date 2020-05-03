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


import RecentPost from "./recent-post-comp"
import Product from "./product-comp"

export default class Wishlist extends Component {
    render() {
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


                                    <div class="single-widget recent-post">
                                        <h3 class="title">Recent post</h3>

                                        <RecentPost/>
                                        <RecentPost/> 
                                        <RecentPost/>
                                        

                                    </div>


                                </div>
                            </div>
                            <div class="col-lg-9 col-md-8 col-12">
                                <div class="row">
                                
                                   <Product/>
                                   <Product/>
                                   <Product/>
                                   <Product/>
                                   <Product/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >

        );
    }
}


