import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Product from './Product';

const loader = document.querySelector('.loader');

const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');

export default class App extends Component {

	constructor(props) {
            super(props);

            this.state = {
                  price: "295.95",
            };

      }

	
	componentDidMount() {
	    this.props.hideLoader();
	    localStorage.clear();
  	}

  	handleCallback = (childData) => {
            this.setState({price: childData});
      }


	render() {

		const {price} = this.state;
		return (
	    		<div>
		            <div className="container-fluid">
                <Header />
                
		            <Product parentCallBack = {this.handleCallback} />
		            </div>
		            <Footer totalPrice ={this.state.price} />
	            </div>

	    );
	}
    
}




setTimeout(() => 
  ReactDOM.render(
    <App
      hideLoader={hideLoader}
      showLoader={showLoader} 
      />,
    document.getElementById('app')
  )
, 2000);