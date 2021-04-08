import React, {Component} from 'react';
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import {Col, Container, Row} from "react-bootstrap";
import ImageSlider from "../components/single-product/ImageSlider";
import BuyOption from "../components/single-product/BuyOption";
import Description from "../components/single-product/Description";
import RecentProduct from "../components/single-product/RecentProduct";

class SingleProduct extends Component {
    render() {
        return (
            <>
                <NavBar/>
                    <Row>
                        <Col xl={6} sm={12} xs={12} md={6} >
                            <ImageSlider/>
                        </Col>
                        <Col xl={6} sm={12} xs={12} md={6} >
                            <BuyOption/>
                        </Col>
                    </Row>
                <Row>
                    <Col>
                        <Description/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <RecentProduct/>
                    </Col>
                </Row>
                <Footer/>
            </>
        );
    }
}

export default SingleProduct;