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
import ProductListElement from "./product-comp"

export default class Category extends Component {
    render() {
        return (

            <div>
                <section className="product-area shop-sidebar shop section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-12">
                                <div className="shop-sidebar">
                                
                                    <div className="single-widget category">
                                        <h3 className="title">Categories</h3>
                                        <ul className="categor-list">
                                            <li><a href="#">Monitors</a></li>
                                            <li><a href="#">Photography</a></li>
                                            <li><a href="#">Headphones</a></li>
                                            <li><a href="#">Home audio</a></li>
                                            <li><a href="#">Video Games</a></li>
                                            <li><a href="#">Laptops</a></li>
                                            <li><a href="#">Office Electronics</a></li>
                                            <li><a href="#">Accessories</a></li>
                                        </ul>
                                    </div>


                                    <div className="single-widget recent-post">
                                        <h3 className="title">Recent post</h3>

                                        <RecentPost/>
                                        <RecentPost/> 
                                        <RecentPost/>
                                        

                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8 col-12">
                                <div className="row">

                                   <ProductListElement/>/
                                   <ProductListElement/>
                                   <ProductListElement/>
                                   <ProductListElement/>
                                   <ProductListElement/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >

        );
    }
}


