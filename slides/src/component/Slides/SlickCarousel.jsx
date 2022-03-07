import React from "react";
import Slider from "react-slick";
// import style from "src/component/Slides/SlickCarousel.module.scss";

export default function SlickCarousel() {
    const style = {
        textAlign: 'center',
        background: 'teal',
        padding: '200px 0',
        fontSize: '30px',
        display: 'inline-block',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };
    return (
        <div style={style}>
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>

    );
}