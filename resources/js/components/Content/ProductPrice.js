import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default class ProductPrice extends Component {

	static propTypes = {
	    price: PropTypes.string.isRequired,
  	};


      render() {

      	const {
	      	props: {
	        		price,
	      	},
	    	} = this;


            localStorage.setItem('totalPrice', price);

            let totalPrice = localStorage.getItem('totalPrice');

            return (



      	 	<h3 >
      	 			${totalPrice}
		      </h3>
            );
      }
}
