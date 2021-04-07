import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

class BannerDesign extends Component {
    render() {
        return (
            <>
               <Container fluid={true}>
                   <Row>
                       <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                           <Card shadow={0} className='banner-1'>
                               <div className='text-bg'>
                                    <Card.Text className='card-text-custom' >BIKES</Card.Text>
                               </div>
                           </Card>
                       </Col>
                       <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                           <Card shadow={0} className='banner-2'>
                               <div className='text-bg'>
                                    <Card.Text className='card-text-custom' style={{'fontSize':'50px'}}>Accessories</Card.Text>
                               </div>
                           </Card>
                       </Col>
                   </Row>
               </Container>
            </>
        );
    }
}

export default BannerDesign;