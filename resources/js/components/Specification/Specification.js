import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Specification extends Component {

	static propTypes = {
	    content: PropTypes.string.isRequired,
	    label: PropTypes.string.isRequired,
  	};

  	constructor(props) {
            super(props);

      }


      render() {

      	const {
	      	props: {
        			label,
        			content
	      	},
		  
    		} = this;
	    


            return (

      	 	<tr >
      	 		<td className="label">{label}</td>
      	 		<td className="content"><span>{content}</span></td>
		      </tr>
            );
      }
}
