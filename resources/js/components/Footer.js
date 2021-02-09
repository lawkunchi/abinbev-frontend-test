import React, { Component } from 'react';
import ProductPrice from "./Content/ProductPrice";

export default class Footer extends Component {

      constructor(props) {
            super(props);


      }

      render() {

            const {
                  props: {
                        totalPrice,
                  },
            } = this;

            return (

                  <div className="container-fluid footer-container">
                        <div className="row footer-wrapper">
                        	<div className="col-md-6">
                                    <div className="row">
                                          <div className="col-xl-6 col-md-12">
                                                <div className="footer-content">
                                                      <span>Free Shipping</span>
                                                      <p>Get 2-day free shipping anywhere in North America.</p>
                                                </div>
                                          </div>

                                          <div className="col-xl-6 col-md-12">
                                                <div className="footer-content second">
                                                      <span>2 Years Warranty</span>
                                                      <p>If anything goes wrong in the first two years, we'll replace it for free.</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <div className="col-md-6 col-12">
                                    <div className="row">
                                          <div className="col-md-6 col-xl-8">
                                                <div className="price-container">
                                                      <h3>${totalPrice}</h3>
                                                      <span>Need financing? Learn more </span>
                                                </div>
                                          </div>
                                          <div className="col-md-6 col-xl-4">
                                                <div className="button-container">
                                                      <button>Buy Now</button>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div>
            
            );
      }
}
