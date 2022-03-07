import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
        url: 'images/slide_2.jpg',
        caption: 'Slide 1'
    },
    {
        url: 'images/slide_3.jpg',
        caption: 'Slide 2'
    },
    {
        url: 'images/slide_4.jpg',
        caption: 'Slide 3'
    },

];

const properties = {
    duration: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    indicators: true,
};
const SlideOne = () => {
    return (
        <div className="slide-container">
            <Slide {...properties}>
                {slideImages.map((slideImage, index)=> (
                    <div className="each-slide" key={index}>
                        <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                            <span>{slideImage.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default SlideOne;