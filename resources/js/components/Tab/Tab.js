import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tab extends Component {

	static propTypes = {
	    activeTab: PropTypes.string.isRequired,
	    label: PropTypes.string.isRequired,
	    content: PropTypes.string.isRequired,
	    onClick: PropTypes.func.isRequired,
	    activeKey: PropTypes.string.isRequired,
	    tabKey: PropTypes.string.isRequired,
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
	     			activeKey,
	        		tabKey
	      	},
	    	} = this;

	    	let spanClassName = '';

	    	if (activeKey === tabKey) {
	      		spanClassName +='tab-item-active';
	    	}



            return (

      	 	<div className='tab-item col-md-4 col-4 medium-font' tabkey={tabKey} onClick={onClick} content={content}>
		        	<span className={spanClassName}>{label}</span>
		      </div>
            );
      }
}
