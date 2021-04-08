import React, {Component} from 'react';
import {Button, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
    render() {
        return (
            <>
                <Container fluid={true} >
                    <Row className='footer'>
                        <Col xl={4} sm={4} md={4} xs={12} className={'footer-col-1'}>
                            <img src='./logo-white.png' width={200}/>
                            <p className='about-text-footer'>
                                Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                                Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator
                                Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator
                            </p>

                        </Col>
                        <Col xl={4} sm={4} md={4} xs={12} className={'footer-col-1'}>
                            <h1 className='contact-text-footer'>Contact</h1>
                            <div style={{'margin':"28px 0px"}}>
                                <p>House#7, Road#4, Gulshan 1</p>
                                <p>Dhaka,Bangladesh</p>
                                <p>Phone: 01717402382</p>
                                <p>Email: info@bebiker.com</p>
                            </div>
                        </Col>
                        <Col xl={4} sm={4} md={4} xs={12} className={'footer-col-1'}>
                            <h2 className='contact-text-footer'>Subscribe Newsletter</h2>
                            <Form inline>
                                <FormControl type="email" placeholder="Subscribe" className="mr-sm-2 col-10" />
                                <Button variant="outline-danger"><FontAwesomeIcon icon={faPaperPlane}/></Button>
                            </Form>
                            <div>
                                <FontAwesomeIcon className="ffa ff" icon={faFacebook}/>
                                <FontAwesomeIcon className="ffa ins"icon={faInstagram}/>
                                <FontAwesomeIcon className="ffa tw" icon={faTwitter}/>

                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='footer-c'>All right reserve to bebiker@2021</Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Footer;