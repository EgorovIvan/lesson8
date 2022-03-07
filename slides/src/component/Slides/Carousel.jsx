import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import slide1 from './../images/top/1.jpg';
import slide2 from './../images/top/2.jpeg';
import slide3 from './../images/top/3.jpg';


function MyCarousel() {
const properties = {
    autoPlay: true,
    interval: 5000,
    infiniteLoop: true,
    }
    return (
        <Carousel {...properties} >
            <div>
                <img src={slide1}/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={slide2}/>
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={slide3}/>
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default MyCarousel;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));