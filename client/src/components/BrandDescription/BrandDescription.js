import React, { Component } from "react";


class BrandDescription extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center p-0 m-0">
                <div className="row m-0 p-0">
                    <div className="col-md-9 col-xs-12">
                        <div className="card-body">
                            <h5 className="card-title">About Company</h5>
                            <p className="card-text">
                                Our company provides an online e-commerce store which allows a view of our products before deciding to purchase.
                                Customers must sign up and login, in order to add a product to their carts which will allow deletion if necessary.
                            </p>
                        </div>
                    </div>

                    <div className=" card col-md-3 col-xs-12 text-center">
                        <div className="card-body">
                            <h5 className="card-title">Follow Us!</h5>
                            <a href="/">
                                <span className="fa-stack facebookLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="/">
                                <span className="fa-stack twitterLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-twitter fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="/">
                                <span className="fa-stack instagramLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-instagram fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="/">
                                <span className="fa-stack linkedinLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-linkedin-in fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="/">
                                <span className="fa-stack googleLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-google fa-stack-1x"></i>
                                </span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BrandDescription;