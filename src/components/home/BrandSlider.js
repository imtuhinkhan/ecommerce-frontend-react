import React, {Component} from 'react';
import {Card, Container} from "react-bootstrap";
import Slider from "react-slick";
class BrandSlider extends Component {
    render() {
        let settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 4,
            initialSlide: 0,
            autoplay: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <>
                <Container fluid={true}>
                    <p className='headline'>BRANDS </p>
                    <p className='sub-text'>Chose one from the below categories that matches your personalities</p>
                    <div>
                            <Slider {...settings}>
                            <div>
                                <Card className="card-style-2">
                                    <img className="w-100" alt="test"  src="https://suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__160682555276344.png"/>
                                    <Card.Body className="category-card-body">
                                        <p className="category-text"> category name</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="card-style-2">
                                    <img className="w-100" alt="test"  src="https://suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__160682555276344.png"/>
                                    <Card.Body className="category-card-body">
                                        <p className="category-text"> category name</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="card-style-2">
                                    <img className="w-100" alt="test"  src="https://suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__160682555276344.png"/>
                                    <Card.Body className="category-card-body">
                                        <p className="category-text"> category name</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="card-style-2">
                                    <img className="w-100" alt="test"  src="https://suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__160682555276344.png"/>
                                    <Card.Body className="category-card-body">
                                        <p className="category-text"> category name</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="card-style-2">
                                    <img className="w-100" alt="test"  src="https://suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__160682555276344.png"/>
                                    <Card.Body className="category-card-body">
                                        <p className="category-text"> category name</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="card-style-2">
                                    <img className="w-100" alt="test"  src="https://suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__160682555276344.png"/>
                                    <Card.Body className="category-card-body">
                                        <p className="category-text"> category name</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="card-style-2">
                                    <img className="w-100" alt="test"  src="https://suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__160682555276344.png"/>
                                    <Card.Body className="category-card-body">
                                        <p className="category-text"> category name</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="card-style-2">
                                    <img className="w-100" alt="test"  src="https://suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__160682555276344.png"/>
                                    <Card.Body className="category-card-body">
                                        <p className="category-text"> category name</p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Slider>
                    </div>
                </Container>
            </>
        );
    }
}

export default BrandSlider;