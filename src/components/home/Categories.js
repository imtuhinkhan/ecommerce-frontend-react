import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

class Categories extends Component {
    render() {
        return (
                <>
                    <Container fluid={true}>
                        <p className='headline'>Bike category </p>
                        <p className='sub-text'>Chose one from the below categories that matches your personalities</p>
                        <Row>
                            <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                <Row>
                                    <Col xl={3} lg={3} md={3} sm={6} xs={6} className="category-col">
                                        <Card className="card-style-2">
                                           <img className="w-100" alt="test"  src="./images/bikes_category/cruiser.png"/>
                                           <Card.Body className="category-card-body">
                                                <p className="category-text"> cruiser</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3} lg={3} md={3} sm={6} xs={6} className="category-col">
                                        <Card className="card-style-2">
                                           <img className="w-100" alt="test"  src="./images/bikes_category/cafe_racer.png"/>
                                           <Card.Body className="category-card-body">
                                                <p className="category-text"> cafe racer</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3} lg={3} md={3} sm={6} xs={6} className="category-col">
                                        <Card className="card-style-2">
                                           <img className="w-100" alt="test"  src="/images/bikes_category/sports.png"/>
                                           <Card.Body className="category-card-body">
                                                <p className="category-text"> Sports</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3} lg={3} md={3} sm={6} xs={6} className="category-col">
                                        <Card className="card-style-2">
                                           <img className="w-100" alt="test"  src="/images/bikes_category/commuter.png"/>
                                           <Card.Body className="category-card-body">
                                                <p className="category-text"> Commuter</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6} xs={6} >
                                <Row>
                                    <Col xl={3} lg={3} md={3} sm={6} xs={6} className="category-col">
                                        <Card className="card-style-2">
                                           <img className="w-100" alt="test"  src="/images/bikes_category/adventure.png"/>
                                           <Card.Body className="category-card-body">
                                                <p className="category-text"> adventure</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3} lg={3} md={3} sm={6} xs={6} className="category-col">
                                        <Card className="card-style-2">
                                           <img className="w-100" alt="test"  src="/images/bikes_category/retro.png"/>
                                           <Card.Body className="category-card-body">
                                                <p className="category-text"> retro</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3} lg={3} md={3} sm={6} xs={6} className="category-col">
                                        <Card className="card-style-2">
                                           <img className="w-100" alt="test"  src="/images/bikes_category/electric.png"/>
                                           <Card.Body className="category-card-body">
                                                <p className="category-text"> Electric</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3} lg={3} md={3} sm={6} xs={6} className="category-col">
                                        <Card className="card-style-2">
                                           <img className="w-100" alt="test"  src="/images/bikes_category/scooter.png"/>
                                           <Card.Body className="category-card-body">
                                                <p className="category-text"> scooter</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </>
        );
    }
}

export default Categories;