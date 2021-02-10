import React, { Component } from 'react';

import Slider from './Slider/Slider';
import Content from './Content/Content';
import Tabs from "./Tab/Tabs";
import Options from "./Option/Options";
import Specifications from "./Specification/Specifications";


export default class Product extends Component {

      constructor(props) {
            super(props);

            this.state = {
                  title: "MOMENTUM True Wireless 2",
                  subTitle: "Earbuds that put sound first",
                  badgeTitle: "New Realease",
                  priceBadge: "Starting at",
                  price: "295.95",
                  priceData: null,
            };

      }

      handleCallback = (childData) => {
            this.setState({data: childData});
            var optionArray = null;
            optionArray = JSON.parse(childData);

            const optionCosts = Object.values(optionArray);

            let totalCost = parseFloat(this.state.price) + optionCosts.reduce((result,number)=> result+number);

            this.props.parentCallBack(totalCost);
      }


      render() {

             const {

                  state: {
                        title,
                        subTitle,
                        badgeTitle,
                        priceBadge,
                        price,
                        data
                  }
            } = this;

            return (

                  <div className="product-container">
                        
                        <div className="row">

                        	<div className="col-md-12 col-xl-6 col-12 left-side">

                                    <Slider>
                                          <div image="images/slider-01.png" slide="images/01.png" slidekey="0"></div>
                                          <div image="images/slider-02.png" slide="images/02.png" slidekey="1"></div>
                                          <div image="images/slider-03.png" slide="images/03.png" slidekey="2"></div>
                                    </Slider>

                                    <div className='row d-none'>
                                          <div className="col-4">
                                                <div className="slide-container"></div>
                                          </div>
                                          <div className="col-4">
                                                <div className="slide-container"></div>
                                          </div>
                                          <div className="col-4">
                                                <div className="slide-container"></div>
                                          </div>
                                    </div>

                        	</div>

                        	<div className="col-md-12 col-xl-6 col-12 content-wrapper">

                                    <div className="row">

                                          <div className="col-12 col-md-12">
                                                <Content title={title} subTitle={subTitle} badgeTitle={badgeTitle} priceBadge={priceBadge} price={price} /> 
                                          </div>

                                          <div className="row pro-features-wrapper-mobile mobile-only">
                                                <div className="col-12">
                                                      <div className="pro-features-mobile">
                                                            <div className="icon">
                                                                  <img src="images/icons/01.png"/>
                                                            </div>
                                                            <span className="title">Customizable Touch Controls </span>
                                                      </div>
                                                </div>
                                                <div className="col-12">
                                                      <div className="pro-features-mobile">
                                                            <div className="icon"><img src="images/icons/02.png"/></div>
                                                            <span className="title">Built-in Equalizer</span>
                                                      </div>
                                                </div>
                                                <div className="col-12">
                                                      <div className="pro-features-mobile">
                                                            <div className="icon"><img src="images/icons/03.png"/></div>
                                                            <span className="title">Active Noise Cancellation</span>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="tabs-wrapper col-md-12 col-12">
                                                <Tabs>
                                                      <div tabkey="0" label="Overview" content="For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday">
                                                            
                                                      </div>
                                                      <div  tabkey="1" label="Features" content="Cupcake ipsum dolor sit. Amet marzipan gummi bears sweet roll I love danish. Powder I love topping pastry I love I love tart pie." >
                                                      </div>
                                                      <div tabkey="2"  label="What's in the box" content="Apple pie marshmallow candy canes gingerbread sesame snaps danish I love lemon drops. Toffee cake apple pie. Carrot cake carrot cake marzipan pastry jelly">
                                                      </div>
                                                </Tabs>
                                          </div>

                                          <div className=" col-md-12 col-12">
                                                <div className="option-wrapper">
                                                      <h4 className="option-title medium-font">Choose your finish.</h4>
                                                      <Options name="finish" parentCallBack = {this.handleCallback}>
                                                            <div label="Ivory White" parentname="finish" content="For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True. " columnclass="col-md-6 col-12 " optionprice=""></div>
                                                            <div label="Matte Black" parentname="finish" content="Of all of the celestial bodies that capture our attention and fascination as astronomers." columnclass="col-md-6 col-12 " optionprice=""></div>

                                                      </Options>
                                                </div>
                                          </div>

                                          <div className="feature-wrapper col-md-12 col-12">
                                                <h4 className="option-title medium-font">Would you like to add extended warranty coverage?</h4>
                                                <Options name="warranty" parentCallBack = {this.handleCallback}>
                                                      <div label="2 years coverage" parentname="warranty" content="For the past 75 years, Sennheiser has put sound first." columnclass="col-md-12" optionprice=""></div>
                                                      <div label="3 years coverage" parentname="warranty" content="For the past 75 years, Sennheiser has put sound first." columnclass="col-md-12" optionprice="75"></div>

                                                </Options>
                                          </div>

                                    </div>

                                    

                                    

                                    <div className="feature-wrapper feature-wrapper-no-content">
                                          <h4 className="option-title medium-font ">Features.</h4>
                                          <Options name="features" parentCallBack = {this.handleCallback}>
                                                <div label="Voice Assistant support" parentname="features" content="" columnclass="col-md-12" optionprice=""></div>
                                                <div label="Customizable controls" parentname="features" content="" columnclass="col-md-12" optionprice="25"></div>

                                          </Options>
                                    </div>

                                    <div className="spec-wrapper">
                                          <h4 className="option-title medium-font">Specifications</h4>
                                          <Specifications name="features">
                                                <div label="Dimensions" content="76.8 x 43.8 x 34.7 mm (earbuds and charging case)"></div>
                                                <div label="USB Standard" content="USB-C"></div>
                                                <div label="Power supply" content="Sennheiser 7mm dynamic driver"></div>
                                                <div label="Frequency response (Microphone)" content="100 Hz to 10 kHz"></div>
                                                <div label="Frequency response" content="5 - 21,000 Hz"></div>
                                                <div label="Noise cancellation" content="Single-Mic ANC per earbud side"></div>
                                          </Specifications>
                                    </div>

                        	</div>
                        </div>
                        
                  </div>
            
            );
      }
}
