import React, {Component} from 'react';
import Slider from 'react-slick'
import {Card} from "react-bootstrap";
class ImageSlider extends Component {
    render() {
        const settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            autoplay:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
        };
        return (
            <>
                <div className='productSlider'>
                    <Slider {...settings}>
                        <div>
                            <img  src="./images/demo.png" width={600}/>
                        </div>
                        <div>
                            <img  src="./images/demo2.png" width={600}/>

                        </div>
                        <div>
                            <img  src="./images/demo.png" width={600}/>

                        </div>
                        <div>
                            <img  src="./images/demo2.png" width={600}/>

                        </div>
                    </Slider>
                </div>
            </>
        );
    }
}

export default ImageSlider;