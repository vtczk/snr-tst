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




export default class Product extends Component {
    render() {
        return (

            <section class="shop checkout section">
                <div class="container">

                    <div class="col-lg-8 col-12">
                        <div class="login">
                            <h2>Sign In</h2>
                            <p>Sign In to our page</p>

                            <form class="form" method="post" action="#">

                                <div class=" login col-lg-6 col-md-6 col-12">
                                    <div class="form-group ">
                                        <div class="logindetails">
                                            <label>Email<span>*</span></label>
                                            <input type="text" name="name" placeholder="Email" required="required" />
                                        </div>
                                    </div>
                                </div>
                                <div class=" login col-lg-6 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>Password<span>*</span></label>
                                        <input type="password" name="name" placeholder="Password" required="required" />
                                    </div>
                                    <div class="single-widget get-button sign">
                                        <div class="content">
                                            <div class="button">
                                                <a href="#" class="btn">Sign In</a>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="#" class="attention_color trans_color">Dont't have an account? Register here!</a><br />
                                </div>


                            </form>

                        </div>
                    </div>


                </div>
            </section>

        );
    }
}


