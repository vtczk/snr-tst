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




export default class CreateAccount extends Component {
    render() {
        return (

            <section class="shop checkout section">
                <div class="container">

                    <div class=" create col-lg-8 col-12">
                        <div class="create">
                            <h2 class="h2create">Create</h2>
                            <p class="h2create">Sign In to our page</p>

                            <form class="form" method="post" action="#">
                                <div class="row">
                                    <div class=" create col-lg-6 col-md-6 col-12">
                                        <div class="form-group ">
                                            <div class="logindetails">
                                                <label>Username<span>*</span></label>
                                                <input type="text" name="name" placeholder="" required="required" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class=" create col-lg-6 col-md-6 col-12">
                                        <div class="form-group ">
                                            <div class="logindetails">
                                                <label>Email<span>*</span></label>
                                                <input type="text" name="name" placeholder="" required="required" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class= "row">
                                <div class=" create col-lg-6 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>Password<span>*</span></label>
                                        <input type="password" name="name" placeholder="" required="required" />
                                    </div>
                                </div>
                                <div class=" create col-lg-6 col-md-6 col-12">
                                    <div class="form-group">
                                        <label>Repeat password<span>*</span></label>
                                        <input type="password" name="name" placeholder="" required="required" />
                                    </div>
                                </div>
                                </div>
                                <a href="#" class="attention_color trans_color">Already have an account? Sign In here!</a><br />
                                <br/>
                                <div class="single-widget get-button create">
                                        <div class="content">
                                            <div class="button">
                                                <a href="#" class="btn">Create</a>
                                            </div>
                                        </div>
                                    </div>
                            </form>

                        </div>
                        
                    </div>


                </div>
            </section>

        );
    }
}


