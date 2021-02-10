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
      			activeKey: this.props.children[0].props.tabkey,
    		};

  	}

  	onClickTabItem = (tab) => {
    		this.setState({ 
    			activeTab: tab.props.content,
    			activeKey: tab.props.tabkey,
    		});
  	}

      render() {

      	const {
	      	onClickTabItem,
	      	props: {
        			children,
	      	},
		      state: {
	        		activeTab,
	        		activeKey
		      }
    		} = this;

            return (
		      <div>
			      <div className="tab-nav text-left">
				        	<div className="tab-items row">
				          		{children.map((child) => {
				            		const { label } = child.props;
				            		const { content } = child.props;
				            		const { tabkey } = child.props;
				            		return (
					              		<Tab activeKey={activeKey} tabKey={tabkey} key={tabkey} activeTab={activeTab} label={label} content={content} onClick={() => this.onClickTabItem(child)}/>
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
