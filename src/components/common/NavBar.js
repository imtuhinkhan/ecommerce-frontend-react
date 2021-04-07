import React, {Component} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingBag, faUser, faBell, faHeart, faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import SearchModal from "./SearchModal";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            modal:false,
        }
    }
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">
                        <img
                            src="/logo.png"
                            width="200"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="" style={{'margin':'auto'}}>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="BIKE TYPE" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="BIKE ACCESSORIES" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home">About</Nav.Link>
                            <Nav.Link href="#home">Contact</Nav.Link>

                        </Nav>
                        <Nav className="icons-menu">
                            <Nav.Link href="#home" className='sign-up-menu'>Sign Up/Login</Nav.Link>
                            <FontAwesomeIcon className='fa faCart' icon={faShoppingCart} />
                            <FontAwesomeIcon className='fa faHeart' icon={faHeart} />
                            <FontAwesomeIcon className='fa faAccount' icon={faSearch} onClick={this.showModal}/>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </>
        );
    }
    showModal =()=>{
        this.setState({
            modal:true
        })
    }
}

export default NavBar;