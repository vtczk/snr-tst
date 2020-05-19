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

            <section className="shop checkout section">
                <div className="container">

                    <div className="col-lg-8 col-12">
                        <div className="login">
                            <h2>Sign In</h2>
                            <p>Sign In to our page</p>

                            {/*<form className="form" method="post" action="#">*/}

                                <div className=" login col-lg-6 col-md-6 col-12">
                                    <div className="form-group ">
                                        <div className="logindetails">
                                            <label>Email<span>*</span></label>
                                            <input type="text" name="name" placeholder="Email" required="required" />
                                        </div>
                                    </div>
                                </div>
                                <div className=" login col-lg-6 col-md-6 col-12">
                                    <div className="form-group">
                                        <label>Password<span>*</span></label>
                                        <input type="password" name="name" placeholder="Password" required="required" />
                                    </div>
                                    <div className="single-widget get-button sign">
                                        <div className="content">
                                            <div className="button">
                                                <a href="#" className="btn">Sign In</a>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="#" className="attention_color trans_color">Dont't have an account? Register here!</a><br />
                                </div>


                            {/*</form>*/}

                        </div>
                    </div>


                </div>
            </section>

        );
    }
}


