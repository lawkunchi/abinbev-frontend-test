import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';

export default class Slider extends Component {

      static propTypes = {
            children: PropTypes.instanceOf(Array).isRequired,
      }

      constructor(props) {
            super(props);

            this.state = {
                  activeSlide: this.props.children[0].props.slide,
                  activeImage: this.props.children[0].props.image,
                  activeKey: this.props.children[0].props.slidekey,
            };

      }

      onClickSlideItem = (child) => {
            this.setState({ 
                        activeSlide: child.props.slide, 
                        activeImage: child.props.image,
                        activeKey: child.props.slidekey,
                  });
      }


      render() {

            const {
                  onClickSlideItem,
                  props: {
                        children,
                  },
                  state: {
                        activeSlide,
                        activeImage,
                        activeKey,
                  }
            } = this;

            return (

            	<div className="slider-container">

            		<div className="image-wrapper thick-gray-border">
              			<img src={activeImage} />
              		</div>

        			<div className="row slides-wrapper">

                              {children.map((child) => {
                                    const { image } = child.props;
                                    const { slide } = child.props;
                                    const { slidekey } = child.props;
                                    return (
                                          <Slide activeSlide={activeSlide} slide={slide} slideKey={slidekey} key={slidekey} activeKey={activeKey} image={image} onClick={() => this.onClickSlideItem(child)}/>
                                    );
                              })}
              		</div>

                        <div className="row pro-features-wrapper">
                              <div className="col-md-4">
                                    <div className="pro-features">
                                          <div className="icon">
                                                <img src="images/icons/01.png"/>
                                          </div>
                                          <span className="title normal-font">Customizable Touch Controls </span>
                                    </div>
                              </div>
                              <div className="col-md-4">
                                    <div className="pro-features">
                                          <div className="icon"><img src="images/icons/02.png"/></div>
                                          <span className="title medium-font">Built-in Equalizer</span>
                                    </div>
                              </div>
                              <div className="col-md-4">
                                    <div className="pro-features">
                                          <div className="icon"><img src="images/icons/03.png"/></div>
                                          <span className="title medium-font">Active Noise Cancellation</span>
                                    </div>
                              </div>
                        </div>

            	</div>
            
            );
      }
}
