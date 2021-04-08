import React, {Component} from 'react';
import {Button, Container} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faStar} from '@fortawesome/free-solid-svg-icons'
class BuyOption extends Component {
    render() {
        return (
            <>
                <Container style={{'margin':'auto'}}>
                    <h3 className='headline-2'>SUZUKI GSXR 150</h3>
                    <p className='single-product-p'><b>Description:</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                    <p><b>Rating:</b>
                        <FontAwesomeIcon icon={faStar} className='rating'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} className='rating'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} className='rating'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} className='rating'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} className='rating'></FontAwesomeIcon>
                    </p>
                    <h4>Price: 379990</h4>
                    <Button variant={"outline-warning"} style={{'marginRight': '5px'}}>ADD TO CART</Button>
                    <Button variant={"outline-primary"}>BUY NOW</Button>
                </Container>
            </>
        );
    }
}

export default BuyOption;