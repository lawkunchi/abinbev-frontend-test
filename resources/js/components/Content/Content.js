import React, { Component } from 'react';
import {gsap, TweenMax, Linear, TimelineMax, TweenLite, registerPlugin} from 'gsap';

export default class Content extends Component {

      constructor(props) {
            super(props);

            /*this.Header = null
            this.intro = null;;
            // this.myTween = TweenMax({paused: true});

            // console.log(TweenMax); */

      }

      componentDidMount() {
            /*TweenLite.set('normal-font, .title')

            var lines = new TimelineMax({repeat:5, yoyo:true, repeatDelay:2})
            .to(this.Header,1,{x:'0%'})
            .to(this.intro,1,{x:'0%'}, "+=0.3") */
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
                              <span className="badge normal-font" ref={el => (this.intro = el)}>{badgeTitle}</span>
                              <h1 className="title bold-font" ref={el => (this.Header = el)}>{title}</h1>
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
