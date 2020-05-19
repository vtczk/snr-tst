import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';

import '../css/flex-slider.min.css';
//import '../css/jquery-ui.css';
import '../css/jquery.fancybox.min.css';
import '../css/style.css';
import '../css/themify-icons.css';
import '../css/reset.css';


export default class AddReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: "Enter your review here...",
            text: ""
        }
        ;
        this.changeText = this.changeText.bind(this);
        this.cancel = this.cancel.bind(this);
        this.publishReview = this.publishReview.bind(this);
    }

    changeText(event) {
        this.setState({text: event.target.text});
    }

    cancel() {

        this.setState({text: ""})
    }

    publishReview() {
        // id: Long, review: String, stars: Int, userName: String, product: Long
        let opinion = {
            id: 0.0,
            review: "super serio jest",
            stars: 5.0,
            userName: "testUser3",
            product: 1
        };
        fetch("http://localhost:9000/opinion",
            {
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(opinion)
            }).catch(err => console.log(err));
        this.props.updateRating()
    }


    render() {
        return (
            <div>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="well well-sm">
                                <div className="row" id="post-review-box">
                                    <div className="col-md-12">
                                        <input id="ratings-hidden" name="rating" type="hidden"/>
                                        <textarea className="form-control animated" cols="50" id="new-review"
                                                  name="comment" value={this.state.text} onChange={this.changeText}
                                                  placeholder={this.state.placeholder}
                                                  rows="5"></textarea>
                                        <br/>
                                        <div className="star text-right">
                                            <span className="fa fa-star "></span>
                                            <span className="fa fa-star "></span>
                                            <span className="fa fa-star "></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                        <div className="text-right">
                                            <a className="btn btn-danger btn-sm" id="close-review-box"
                                               onClick={this.cancel}>
                                                <span className="glyphicon glyphicon-remove"></span>Cancel</a>
                                            <button className="btn  btn-lg" onClick={this.publishReview}>Save</button>
                                        </div>
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



