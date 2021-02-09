import React, { Component } from 'react';

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
                                                      <span className="medium-font">Free Shipping</span>
                                                      <p className="normal-font">Get 2-day free shipping anywhere in North America.</p>
                                                </div>
                                          </div>

                                          <div className="col-xl-6 col-md-12">
                                                <div className="footer-content second">
                                                      <span className="medium-font">2 Years Warranty</span>
                                                      <p className="normal-font">If anything goes wrong in the first two years, we'll replace it for free.</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <div className="col-md-6 col-12">
                                    <div className="row">
                                          <div className="col-md-6 col-xl-8">
                                                <div className="price-container">
                                                      <h3 className="bold-font">${totalPrice}</h3>
                                                      <span className="normal-font">Need financing? Learn more </span>
                                                </div>
                                          </div>
                                          <div className="col-md-6 col-xl-4">
                                                <div className="button-container">
                                                      <button className="bold-font">Buy Now</button>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div>
            
            );
      }
}
