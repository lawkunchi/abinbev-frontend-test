import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';


export default class Tabs extends Component {

	static propTypes = {
    		children: PropTypes.instanceOf(Array).isRequired,
  	}

  	constructor(props) {
    		super(props);

    		this.state = {
      			activeTab: this.props.children[0].props.content,
    		};

  	}

  	onClickTabItem = (tab) => {
    		this.setState({ 
    			activeTab: tab.props.content 
    		});
  		console.log(this.state);
  	}

      render() {

      	const {
	      	onClickTabItem,
	      	props: {
        			children,
	      	},
		      state: {
	        		activeTab,
		      }
    		} = this;

            return (
		      <div>
			      <div className="tab-nav text-left">
				        	<div className="tab-items row">
				          		{children.map((child) => {
				            		const { label } = child.props;
				            		const { content } = child.props;
				            		return (
					              		<Tab activeTab={activeTab} key={label} label={label} content={content} onClick={() => this.onClickTabItem(child)}/>
				            		);
				          		})}
				        	</div>
				        	
				      </div>
				      <div className="tab-content">
		          		<p className="normal-font">{activeTab}</p>
		        	</div>
	        	</div>
	    	);
      }
}
