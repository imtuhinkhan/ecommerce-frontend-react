import React, {Component} from 'react';
import { Card, Col, Container, Row,} from "react-bootstrap";
import {Link} from "react-router-dom";

class FeaturedItem extends Component {
    render() {
        return (
            <>
                <Container fluid={true}>
                    <p className='headline'>featured Bike</p>
                    <p className='sub-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <Row>
                        <Col className="card-box" xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Link to={"/product-details"}>
                                <Card className="image-box">
                                    <img variant="top" src="./images/demo.png"/>
                                    <Card.Body>
                                        <Card.Title>SUZUKI GSXR 150 </Card.Title>
                                        <Card.Text>Price:379990</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>

                        <Col className="card-box" xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box">
                                <img variant="top" src="./images/demo.png"/>
                                <Card.Body>
                                    <Card.Title>SUZUKI GSXR 150 </Card.Title>
                                    <Card.Text>Price:379990</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="card-box"  xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box">
                                <img variant="top" src="./images/demo.png"/>
                                <Card.Body>
                                    <Card.Title>SUZUKI GSXR 150 </Card.Title>
                                    <Card.Text>Price:379990</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="card-box"  xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box">
                                <img variant="top" src="./images/demo.png"/>
                                <Card.Body>
                                    <Card.Title>SUZUKI GSXR 150 </Card.Title>
                                    <Card.Text>Price:379990</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="card-box"  xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box">
                                <img variant="top" src="./images/demo.png"/>
                                <Card.Body>
                                    <Card.Title>SUZUKI GSXR 150 </Card.Title>
                                    <Card.Text>Price:379990</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="card-box" xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card  className="image-box">
                                <img variant="top" src="./images/demo.png"/>
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