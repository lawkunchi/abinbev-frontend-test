import React, { Component } from 'react';


export default class Content extends Component {

      constructor(props) {
            super(props);

      }

      render() {

            const {
                  props: {
                        title,
                        subTitle,
                        badgeTitle,
                        priceBadge,
                        price,
                  },
            } = this;


            return (

                  <div className="Content-container ">
                        <div className="title-container ">
                              <span className="badge normal-font">{badgeTitle}</span>
                              <h1 className="title bold-font">{title}</h1>
                              <h4 className="sub-title normal-font">{subTitle}</h4>
                        </div>

                        <div className="price-container">
                              <span className="badge normal-font">{priceBadge}</span>
                              <h3 className="title bold-font">${price}</h3>
                        </div>

                        

                  </div>
            
            );
      }
}
