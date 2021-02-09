import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tab extends Component {

	static propTypes = {
	    activeTab: PropTypes.string.isRequired,
	    label: PropTypes.string.isRequired,
	    content: PropTypes.string.isRequired,
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
	        		activeTab,
	        		label,
	        		content,
	     			onClick,
	      	},
	    	} = this;

	    	let spanClassName = '';

	    	if (activeTab === label) {
	      		spanClassName +='tab-item-active';
	    	}

            return (

      	 	<div className='tab-item col-md-4 col-4' onClick={onClick} content={content}>
		        	<span className={spanClassName}>{label}</span>
		      </div>
            );
      }
}
