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
import Product from "./product-comp"



function Body() {
    return (
        <div>
            <div class="product ">
                <div class="container navbar-collapse">
                    <div class="row navbar-collapse" >
                        <div class="col-12">
                            <div class="section-title">
                                <br />
                                <h2>Trending Item</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="product-info">

                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="man" role="tabpanel">
                                        <div class="tab-single">
                                            <div class="row">
                                                <Product />
                                                <Product />
                                                <Product />
                                                <Product />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br /> <br /> <br />
            <section class="cown-down">
                <div class="section-inner ">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-6 col-12 padding-right">
                                <div class="image">
                                    <img src="https://via.placeholder.com/750x590" alt="#" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-12 padding-left">
                                <div class="content">
                                    <div class="heading-block">
                                        <p class="small-title">Deal of day</p>
                                        <h3 class="title">Beatutyful dress for women</h3>
                                        <p class="text">Suspendisse massa leo, vestibulum cursus nulla sit amet, frungilla placerat lorem. Cars fermentum, sapien. </p>
                                        <h1 class="price">$1200 <s>$1890</s></h1>
                                        <div class="coming-time">
                                            <div class="clearfix" data-countdown="2021/02/30"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br /> <br /> <br />
        </div>
    );
}
export default Body;




