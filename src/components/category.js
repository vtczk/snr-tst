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

                                        <div class="single-post first">
                                            <div class="image">
                                                <img src="https://via.placeholder.com/75x75" alt="#" />
                                            </div>
                                            <div class="content">
                                                <h5><a href="#">Women Clothings</a></h5>
                                                <p class="price">$99.50</p>
                                                <ul class="reviews">
                                                    <li class="yellow"><i class="ti-star"></i></li>
                                                    <li class="yellow"><i class="ti-star"></i></li>
                                                    <li class="yellow"><i class="ti-star"></i></li>
                                                    <li class="yellow"><i class="ti-star"></i></li>
                                                    <li><i class="ti-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="single-post first">
                                            <div class="image">
                                                <img src="https://via.placeholder.com/75x75" alt="#" />
                                            </div>
                                            <div class="content">
                                                <h5><a href="#">Man Tshirt</a></h5>
                                                <p class="price">$99.50</p>
                                                <ul class="reviews">
                                                    <li class="yellow"><i class="ti-star"></i></li>
                                                    <li class="yellow"><i class="ti-star"></i></li>
                                                    <li class="yellow"><i class="ti-star"></i></li>
                                                    <li class="yellow"><i class="ti-star"></i></li>
                                                    <li class="yellow"><i class="ti-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                            <div class="col-lg-9 col-md-8 col-12">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <a href="product-details.html">
                                                    <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                    <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                </a>
                                                <div class="button-head">
                                                    <div class="product-action">
                                                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                        <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                        <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                    </div>
                                                    <div class="product-action-2">
                                                        <a title="Add to cart" href="#">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                                <div class="product-price">
                                                    <span>$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <a href="product-details.html">
                                                    <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                    <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                </a>
                                                <div class="button-head">
                                                    <div class="product-action">
                                                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                        <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                        <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                    </div>
                                                    <div class="product-action-2">
                                                        <a title="Add to cart" href="#">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                                                <div class="product-price">
                                                    <span>$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <a href="product-details.html">
                                                    <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                    <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                </a>
                                                <div class="button-head">
                                                    <div class="product-action">
                                                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                        <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                        <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                    </div>
                                                    <div class="product-action-2">
                                                        <a title="Add to cart" href="#">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                <div class="product-price">
                                                    <span>$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <a href="product-details.html">
                                                    <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                    <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                    <span class="new">New</span>
                                                </a>
                                                <div class="button-head">
                                                    <div class="product-action">
                                                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                        <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                        <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                    </div>
                                                    <div class="product-action-2">
                                                        <a title="Add to cart" href="#">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                                <div class="product-price">
                                                    <span>$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <a href="product-details.html">
                                                    <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                    <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                </a>
                                                <div class="button-head">
                                                    <div class="product-action">
                                                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                        <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                        <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                    </div>
                                                    <div class="product-action-2">
                                                        <a title="Add to cart" href="#">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                <div class="product-price">
                                                    <span>$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <a href="product-details.html">
                                                    <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                    <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                    <span class="price-dec">30% Off</span>
                                                </a>
                                                <div class="button-head">
                                                    <div class="product-action">
                                                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                        <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                        <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                    </div>
                                                    <div class="product-action-2">
                                                        <a title="Add to cart" href="#">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                                                <div class="product-price">
                                                    <span>$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <a href="product-details.html">
                                                    <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                    <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                </a>
                                                <div class="button-head">
                                                    <div class="product-action">
                                                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                        <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                        <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                    </div>
                                                    <div class="product-action-2">
                                                        <a title="Add to cart" href="#">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                                                <div class="product-price">
                                                    <span>$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <a href="product-details.html">
                                                    <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                    <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                    <span class="out-of-stock">Hot</span>
                                                </a>
                                                <div class="button-head">
                                                    <div class="product-action">
                                                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                        <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                        <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                    </div>
                                                    <div class="product-action-2">
                                                        <a title="Add to cart" href="#">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                                                <div class="product-price">
                                                    <span class="old">$60.00</span>
                                                    <span>$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="single-product">
                                            <div class="product-img">
                                                <a href="product-details.html">
                                                    <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                    <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                    <span class="new">New</span>
                                                </a>
                                                <div class="button-head">
                                                    <div class="product-action">
                                                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                        <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                        <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                    </div>
                                                    <div class="product-action-2">
                                                        <a title="Add to cart" href="#">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                                <div class="product-price">
                                                    <span>$29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div class="shopping-cart section">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">

                                <table class="table shopping-summery">
                                    <thead>
                                        <tr class="main-hading">
                                            <th>PRODUCT</th>
                                            <th>NAME</th>
                                            <th class="text-center">UNIT PRICE</th>
                                            <th class="text-center">QUANTITY</th>
                                            <th class="text-center">TOTAL</th>
                                            <th class="text-center"><i class="ti-trash remove-icon"></i></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="#" /></td>
                                            <td class="product-des" data-title="Description">
                                                <p class="product-name"><a href="#">Women Dress</a></p>
                                                <p class="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
                                            </td>
                                            <td class="price" data-title="Price"><span>$110.00 </span></td>
                                            <td class="qty" data-title="Qty">
                                                <div class="input-group">
                                                    <div class="button minus">
                                                        <button type="button" class="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                                            <i class="ti-minus"></i>
                                                        </button>
                                                    </div>
                                                    <input type="text" name="quant[1]" class="input-number" data-min="1" data-max="100" value="1" />
                                                    <div class="button plus">
                                                        <button type="button" class="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
                                                            <i class="ti-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                            </td>
                                            <td class="total-amount" data-title="Total"><span>$220.88</span></td>
                                            <td class="action" data-title="Remove"><a href="#"><i class="ti-trash remove-icon"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td class="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="#" /></td>
                                            <td class="product-des" data-title="Description">
                                                <p class="product-name"><a href="#">Women Dress</a></p>
                                                <p class="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
                                            </td>
                                            <td class="price" data-title="Price"><span>$110.00 </span></td>
                                            <td class="qty" data-title="Qty">
                                                <div class="input-group">
                                                    <div class="button minus">
                                                        <button type="button" class="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[2]">
                                                            <i class="ti-minus"></i>
                                                        </button>
                                                    </div>
                                                    <input type="text" name="quant[2]" class="input-number" data-min="1" data-max="100" value="2" />
                                                    <div class="button plus">
                                                        <button type="button" class="btn btn-primary btn-number" data-type="plus" data-field="quant[2]">
                                                            <i class="ti-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                            </td>
                                            <td class="total-amount" data-title="Total"><span>$220.88</span></td>
                                            <td class="action" data-title="Remove"><a href="#"><i class="ti-trash remove-icon"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td class="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="#" /></td>
                                            <td class="product-des" data-title="Description">
                                                <p class="product-name"><a href="#">Women Dress</a></p>
                                                <p class="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
                                            </td>
                                            <td class="price" data-title="Price"><span>$110.00 </span></td>
                                            <td class="qty" data-title="Qty">
                                                <div class="input-group">
                                                    <div class="button minus">
                                                        <button type="button" class="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[3]">
                                                            <i class="ti-minus"></i>
                                                        </button>
                                                    </div>
                                                    <input type="text" name="quant[3]" class="input-number" data-min="1" data-max="100" value="3" />
                                                    <div class="button plus">
                                                        <button type="button" class="btn btn-primary btn-number" data-type="plus" data-field="quant[3]">
                                                            <i class="ti-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                            </td>
                                            <td class="total-amount" data-title="Total"><span>$220.88</span></td>
                                            <td class="action" data-title="Remove"><a href="#"><i class="ti-trash remove-icon"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">

                                <div class="total-amount">
                                    <div class="row">
                                        <div class="col-lg-8 col-md-5 col-12">
                                            <div class="left">
                                                <div class="coupon">
                                                    <form action="#" target="_blank">
                                                        <input name="Coupon" placeholder="Enter Your Coupon" />
                                                        <button class="btn">Apply</button>
                                                    </form>
                                                </div>
                                                <div class="checkbox">
                                                    <label class="checkbox-inline" for="2"><input name="news" id="2" type="checkbox" /> Shipping (+10$)</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-7 col-12">
                                            <div class="right">
                                                <ul>
                                                    <li>Cart Subtotal<span>$330.00</span></li>
                                                    <li>Shipping<span>Free</span></li>
                                                    <li>You Save<span>$20.00</span></li>
                                                    <li class="last">You Pay<span>$310.00</span></li>
                                                </ul>
                                                <div class="button5">
                                                    <a href="#" class="btn">Checkout</a>
                                                    <a href="#" class="btn">Continue shopping</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}


