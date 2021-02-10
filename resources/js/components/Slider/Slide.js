import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Slide extends Component {

	static propTypes = {
	    activeSlide: PropTypes.string.isRequired,
	    image: PropTypes.string.isRequired,
	    slide: PropTypes.string.isRequired,
	    activeKey: PropTypes.string.isRequired,
	    slideKey: PropTypes.string.isRequired,
	    onClick: PropTypes.func.isRequired,
  	};

  	constructor(props) {
            super(props);


            this.state = {
                  onClick: this.props.onClick,
            };

      }

      render() {

      	const {
	      	props: {
	        		activeSlide,
      				onClick,
      				onFocus,
	        		image,
	        		slide,
	        		activeKey,
	        		slideKey,
	      	},
	    	} = this;


	    	let className = 'slide thick-gray-border focus-outline';

	    	if (activeKey === slideKey) {
	      		className += ' slide-active';
	    	}


            return (

        	<div className="col-4">
                  <div className={className} tabIndex={slideKey} slidekey={slideKey} onClick={onClick} >
                  	<img src={slide}/>
                  </div>
            </div>
            );
      }
}
