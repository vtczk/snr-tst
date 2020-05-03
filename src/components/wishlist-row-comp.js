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

            <tr>
                <td class="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="#" /></td>
                <td class="product-des" data-title="Description">
                    <p class="product-name"><a href="#">Women Dress</a></p>
                    <p class="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
                </td>
                <td class="price" data-title="Price"><span>$110.00 </span></td>
                <td class="total-amount" data-title="Stock"><span>In stock</span></td>
                <td class="qty" data-title="Qty">
                    <div class="input-group">
                        
                        <button type="text" name="quant[1]" class="input-number">Add to cart</button>
                        
                    </div>

                </td>
                
                <td class="action" data-title="Remove"><a href="#"><i class="ti-trash remove-icon"></i></a></td>
            </tr>

        );
    }
}


