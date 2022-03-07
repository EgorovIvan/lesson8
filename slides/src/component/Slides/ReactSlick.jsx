import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

function ReactSlick() {
    const settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        interval: 3000,
        infiniteLoop: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
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
            <div>
                <h3>7</h3>
            </div>
            <div>
                <h3>8</h3>
            </div>
            <div>
                <h3>9</h3>
            </div>
            <div>
                <h3>10</h3>
            </div>
            <div>
                <h3>11</h3>
            </div>
            <div>
                <h3>12</h3>
            </div>
            <div>
                <h3>13</h3>
            </div>
            <div>
                <h3>14</h3>
            </div>
            <div>
                <h3>15</h3>
            </div>
            <div>
                <h3>16</h3>
            </div>

        </Slider>
    );
}

export default ReactSlick;