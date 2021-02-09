import React, { Component } from 'react';
import Option from "./Option";
import ProductPrice from "./ProductPrice";
import PropTypes from 'prop-types';

export default class Options extends Component {

	static propTypes = {
    		children: PropTypes.instanceOf(Array).isRequired,
            name: PropTypes.string.isRequired,
  	}

  	constructor(props) {
    		super(props);

    		this.state = {
      		activeOption: this.props.children[0].props.label,
                  optionsArrat: "",
    		};


  	}

  	onClickOptionItem= (option) => {

            var optionArray = localStorage.getItem('optionPrices');

            let productPrice = localStorage.getItem('totalPrices');

            optionArray = optionArray ? JSON.parse(optionArray) : {};

            let optionPrice = 0;
            if(option.props.optionprice !== "") {
                  optionPrice = parseFloat(option.props.optionprice);
            }

            optionArray[option.props.parentname] = optionPrice;


            localStorage.setItem("optionPrices", JSON.stringify(optionArray));

            this.state = {
                  optionsArray: optionArray,
            };

            this.setState({ activeOption: option.props.label });

            console.log(optionArray);

            this.props.parentCallBack(JSON.stringify(optionArray));
      }
    	
      render() {
      	const {
	      	onClickOptionItem,
	      	props: {
        			children,
	      	},
		      state: {
	        		activeOption,
		      }
    		} = this;

            return (


	        	<div className="row">
	          		{children.map((child) => {

	            		const { label } = child.props;
	            		const { content } = child.props;
                              const { columnclass } = child.props;
                               const { optionprice } = child.props;
                               const { parentname } = child.props;
                              

	            		return (
		              		<Option  parentName={parentname} activeOption={activeOption} optionPrice={optionprice} columnClass={columnclass} key={label} label={label} content={content} onClick={() => this.onClickOptionItem(child)}/>
	            		);
	          		})}
	        	</div>

		        	
            
            );
      }
}
