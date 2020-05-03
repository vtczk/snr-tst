


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
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="well well-sm">


                                <div class="row" id="post-review-box" >
                                    <div class="col-md-12">
                                        <form accept-charset="UTF-8" action="" method="post">
                                            <input id="ratings-hidden" name="rating" type="hidden" />
                                            <textarea class="form-control animated" cols="50" id="new-review" name="comment" placeholder="Enter your review here..." rows="5"></textarea>
                                            <br/>
                                            <div class="star text-right">
                                                <span class="fa fa-star "></span>
                                                <span class="fa fa-star "></span>
                                                <span class="fa fa-star "></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>

                                            </div>

                                            <div class="text-right">



                                                <a class="btn btn-danger btn-sm" href="#" id="close-review-box">
                                                    <span class="glyphicon glyphicon-remove"></span>Cancel</a>
                                                <button class="btn  btn-lg" type="submit">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}



