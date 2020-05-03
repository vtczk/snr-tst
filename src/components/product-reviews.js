


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




export default class Description extends Component {
    render() {
        return (


            <div>
                <br />
                <div class="reviews-tab-desc">

                    <div class="media mt-30">
                        <div class="media-left">
                            <a href="#"><img src="https://via.placeholder.com/80x80" alt="#" /></a>
                        </div>
                        <div class="media-body">
                            <div class="clearfix">
                                <div class="name-commenter pull-left mb-0">
                                    <h6 class="media-heading mb-0"> Gerald Barnes</h6>
                                 
                                </div>
                                
                            </div>
                            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas .</p>
                        </div>
                    </div>

                </div>
                <hr/>
            </div>

        );
    }
}



