import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Specification from './Specification';


export default class Specifications extends Component {

	static propTypes = {
    		children: PropTypes.instanceOf(Array).isRequired,
  	}

  	constructor(props) {
    		super(props);

  	}

  	onClickTabItem = (tab) => {
  	}

      render() {

      	const {
	      	props: {
        			children,
	      	},
		  
    		} = this;

            return (
		      <div className="spec-container">
		        	<table className="table">
		        		<thead></thead>
		        		<tbody>
		          		{children.map((child) => {
		            		const { label } = child.props;
		            		const { content } = child.props;
		            		return (
			              		<Specification key={label} label={label} content={content}/>
		            		);
		          		})}
		          		</tbody>
		        	</table>
		      </div>
	    	);
      }
}
