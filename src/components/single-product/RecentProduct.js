import React, {Component} from 'react';
import {Card, Container} from "react-bootstrap";
import Slider from "react-slick";
import {Link} from "react-router-dom";

class RecentProduct extends Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
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
                    <p className='headline'>Recent Product </p>
                    <p className='sub-text'>Chose one from the below categories that matches your personalities</p>
                    <div>
                        <Slider {...settings}>
                            <div>
                                <Link to={'/product-details'}>
                                    <Card className="card-style-2">
                                        <img className="w-100" alt="test"  src="/images/brands/yamaha.png"/>
                                        <Card.Body className="category-card-body">
                                            <p className="category-text"> yamaha</p>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                            <div>
                                <Card className="card-style-2">
                                    <img className="w-100" alt="test"  src="/images/brands/suzuki.png"/>
                                    <Card.Body className="category-card-body">
                                        <p className="category-text"> suzuki</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="card-style-2">
                                    <img className="w-100" alt="test"  src="/images/brands/bajaj.png"/>
                                    <Card.Body className="category-card-body">
                                        <p className="category-text"> bajaj</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="card-style-2">
                                    <img className="w-100" alt="test"  src="/images/brands/aprilla.png"/>
                                    <Card.Body className="category-card-body">
                                        <p className="category-text"> aprilla</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="card-style-2">
                                    <img className="w-100" alt="test"  src="/images/brands/hero.png"/>
                                    <Card.Body className="category-card-body">
                                        <p className="category-text"> hero</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="card-style-2">
                                    <img className="w-100" alt="test"  src="/images/brands/honda.png"/>
                                    <Card.Body className="category-card-body">
                                        <p className="category-text"> honda</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="card-style-2">
                                    <img className="w-100" alt="test"  src="/images/brands/ktm.png"/>
                                    <Card.Body className="category-card-body">
                                        <p className="category-text"> ktm</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="card-style-2">
                                    <img className="w-100" alt="test"  src="/images/brands/lifan.png"/>
                                    <Card.Body className="category-card-body">
                                        <p className="category-text"> lifan</p>
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

export default RecentProduct;