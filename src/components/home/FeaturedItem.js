import React, {Component} from 'react';
import {Button, Card, Col, Container, Row,} from "react-bootstrap";

class FeaturedItem extends Component {
    render() {
        return (
            <>
                <Container fluid={true}>
                    <p className='headline'>featured product</p>
                    <p className='sub-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <Row>
                        <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box">
                                <img variant="top" src="https://suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__160682552968813.png"/>
                                <Card.Body>
                                    <Card.Title>SUZUKI GSXR 150 </Card.Title>
                                    <Card.Text>Price:379990</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box">
                                <img variant="top" src="https://suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__160682552968813.png"/>
                                <Card.Body>
                                    <Card.Title>SUZUKI GSXR 150 </Card.Title>
                                    <Card.Text>Price:379990</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box">
                                <img variant="top" src="https://suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__160682552968813.png"/>
                                <Card.Body>
                                    <Card.Title>SUZUKI GSXR 150 </Card.Title>
                                    <Card.Text>Price:379990</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box">
                                <img variant="top" src="https://suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__160682552968813.png"/>
                                <Card.Body>
                                    <Card.Title>SUZUKI GSXR 150 </Card.Title>
                                    <Card.Text>Price:379990</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box">
                                <img variant="top" src="https://suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__160682552968813.png"/>
                                <Card.Body>
                                    <Card.Title>SUZUKI GSXR 150 </Card.Title>
                                    <Card.Text>Price:379990</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card  className="image-box">
                                <img variant="top" src="https://suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__160682552968813.png"/>
                                <Card.Body>
                                    <Card.Title>SUZUKI GSXR 150 </Card.Title>
                                    <Card.Text>Price:379990</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default FeaturedItem;