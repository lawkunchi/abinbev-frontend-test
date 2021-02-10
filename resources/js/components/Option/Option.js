import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Option extends Component {

	static propTypes = {
	    activeOption: PropTypes.string.isRequired,
	    label: PropTypes.string.isRequired,
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
	     			onClick,
	        		activeOption,
	        		label,
	        		content,
	        		columnClass,
	        		optionPrice,
	        		parentname,
	      	},
	    	} = this;




	    	let className = 'option-item thick-gray-border';
	    	let columnClassName = '';

	    	if (activeOption === label) {
	      		className += ' option-item-active focus-outline';
	    	}
	    	if(columnClass) {
	    		columnClassName += columnClass;
	    	}
	    	let optionPriceString = "";
	    	if(optionPrice !== "") {
	    		optionPriceString = "+ $"+optionPrice; 
	    	}


            return (

      	 	<div className={columnClassName}  >
      	 		<div className={className} onClick={onClick} tabIndex="50">
      	 			<span className="medium-font">{label}</span>
	        		<p className="medium-font">{content}</p>
	        		<small className="float-right normal-font">{optionPriceString}</small>
      	 		</div>
		      </div>
            );
      }
}
