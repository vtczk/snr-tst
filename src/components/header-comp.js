


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



export default class Header extends Component {
    render() {
        return (

            <header class="header shop">
          
            <div class="topbar">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-12">
                            
                            <div class="top-left">
                                <ul class="list-main">
                                    <li><i class="ti-headphone-alt"></i> xxxxxxxxxxxxxxx</li>
                                    <li><i class="ti-email"></i> xxxxxxxxxxxxxx</li>
                                </ul>
                            </div>
                       
                        </div>
                        <div class="col-lg-8 col-md-12 col-12">
                           
                            <div class="right-content">
                                <ul class="list-main">
                                    
                                    <li><i class="ti-power-off"></i><a href="login.html#">Login</a></li>
                                </ul>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="middle-inner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-2 col-12">
                            
                            <div class="logo">
                                <a href="#">SHOP</a>
                            </div>
                           
                            <div class="search-top">
                                <div class="top-search"><a href="#0"><i class="ti-search"></i></a></div>
                             
                                <div class="search-top">
                                    <form class="search-form">
                                        <input type="text" placeholder="Search here..." name="search"/>
                                        <button value="search" type="submit"><i class="ti-search"></i></button>
                                    </form>
                                </div>
                                
                            </div>
                           
                            <div class="mobile-nav"></div>
                        </div>
                        <div class="col-lg-8 col-md-7 col-12">
                            <div class="search-bar-top">
                                <div class="search-bar">
                                    <form>
                                        <input name="search" placeholder="Search Products Here....." type="search"/>
                                        <button class="btnn"><i class="ti-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-12">
                            <div class="right-bar">
                               
                                
                                <div class="sinlge-bar">
                                    <a href="#" class="single-icon"><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>
                                </div>
                                <div class="sinlge-bar shopping">
                                    <a href="#" class="single-icon"><i class="ti-bag"></i> <span class="total-count">X</span></a>
                                  
                                   
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="header-inner">
                <div class="container">
                    <div class="cat-nav-head">
                        <div class="row">
                            
                            <div class="col-lg-3">
                          
                                <div class="all-category">
                                    <h3 class="cat-heading"><i class="fa fa-bars" aria-hidden="true"></i>CATEGORIES</h3>
                                    <ul class="main-category">
                                    <li><a href="#">Computers <i class="fa fa-angle-right" aria-hidden="true"></i></a>
										
									</li>
									<li class="main-mega"><a href="#">TV & Video <i class="fa fa-angle-right" aria-hidden="true"></i></a>
									</li>
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
                            <div class="col-lg-9 col-12">
                                <div class="menu-area">
                                 
                                    <nav class="navbar navbar-expand-lg">
                                        <div class="navbar-collapse">	
                                            <div class="nav-inner">	
                                                <ul class="nav main-menu menu navbar-nav">
                                                        <li class="active"><a href="#">Home</a></li>
                                                        <li><a href="#">Wishlist</a></li>												
                                                        <li><a href="contact.html">Contact Us</a></li>
                                                    </ul>
                                            </div>
                                        </div>
                                    </nav>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </header>
        );
    }
}


