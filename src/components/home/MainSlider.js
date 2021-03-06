import React, {Component} from 'react';
import Slider from "react-slick";
import {Container} from "react-bootstrap";
class MainSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 5000,
            arrows: false
        };
        return (
            <>
                <Container fluid={true}>
                    <Slider {...settings}>
                        <div>
                            <img alt="image-1"
                                 src="./images/demo2.png"
                                 className="big-carousel-image-left"
                            />
                            <h1 className='slider-text'>The All New <br/><span className='style1'>Suzuki GSXR 150</span><br/> with ABS</h1>
                        </div>
                        <div>
                            <img alt="image-1"
                                 src="./images/demo.png"
                                 className="big-carousel-image-right"
                            />
                            <h1 className='slider-text-2'>The All New <br/><span className='style2'>Suzuki GSXR 150</span><br/> with ABS</h1>
                        </div>
                        <div>
                            <img alt="image-1"
                                 src="http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Suzuki-GSX-R600-Motorcycle-Bike-PNG-Image-1.png"
                                 className="big-carousel-image-left"
                            />
                            <h1 className='slider-text'>Upcoming Monster<br/><span className='style1'>Suzuki GSXR 600</span></h1>

                        </div>
                    </Slider>
                </Container>
            </>
        );
    }
}

export default MainSlider;