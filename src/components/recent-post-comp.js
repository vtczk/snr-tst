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

            <div class="single-post first">
            <div class="image">
                <img src="https://via.placeholder.com/75x75" alt="#" />
            </div>
            <div class="content">
                <h5><a href="#">Girls Dress</a></h5>
                <p class="price">$99.50</p>
                <ul class="reviews">
                    <li class="yellow"><i class="ti-star"></i></li>
                    <li class="yellow"><i class="ti-star"></i></li>
                    <li class="yellow"><i class="ti-star"></i></li>
                    <li><i class="ti-star"></i></li>
                    <li><i class="ti-star"></i></li>
                </ul>
            </div>
        </div>


        );
    }
}


