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
	        		parentname
	      	},
	    	} = this;


	    	let className = 'option-item';
	    	let columnClassName = '';

	    	if (activeOption === label) {
	      		className += ' option-item-active';
	    	}
	    	if(columnClass) {
	    		columnClassName += columnClass;
	    	}
	    	let optionPriceString = "";
	    	if(optionPrice !== "") {
	    		optionPriceString = "+ $"+optionPrice; 
	    	}


            return (

      	 	<div className={columnClassName} >
      	 		<div className={className} onClick={onClick}>
      	 			<span>{label}</span>
	        		<p>{content}</p>
	        		<small className="float-right">{optionPriceString}</small>
      	 		</div>
		      </div>
            );
      }
}
