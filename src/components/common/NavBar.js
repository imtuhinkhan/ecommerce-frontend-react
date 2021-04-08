import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import SearchModal from "./SearchModal";
import {Link} from "react-router-dom";

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
                    <Navbar.Brand href="/">
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
                            <NavItem>   <Link className="nav-link"   to="/">Home</Link> </NavItem>
                            <NavDropdown title="BIKE TYPE" id="basic-nav-dropdown">
                                <NavItem><Link className="dropdown-item"   to="/">Home</Link> </NavItem>
                                <NavItem><Link className="dropdown-item"   to="/">Home</Link> </NavItem>
                                <NavItem><Link className="dropdown-item"   to="/">Home</Link> </NavItem>
                                <NavItem><Link className="dropdown-item"   to="/">Home</Link> </NavItem>


                            </NavDropdown>
                            <NavDropdown title="BIKE ACCESSORIES" id="basic-nav-dropdown">
                                <NavItem><Link className="dropdown-item"   to="/">Home</Link> </NavItem>
                                <NavItem><Link className="dropdown-item"   to="/">Home</Link> </NavItem>
                                <NavItem><Link className="dropdown-item"   to="/">Home</Link> </NavItem>
                                <NavItem><Link className="dropdown-item"   to="/">Home</Link> </NavItem>
                            </NavDropdown>

                            <NavItem><Link className="nav-link"   to="/">About</Link> </NavItem>
                            <NavItem><Link className="nav-link"   to="/">Contact</Link> </NavItem>

                        </Nav>
                        <Nav className="icons-menu">
                            <Nav.Link href="#home" className='sign-up-menu'>Sign Up/Login</Nav.Link>
                            <FontAwesomeIcon className='fa faCart' icon={faShoppingCart} />
                            <FontAwesomeIcon className='fa faHeart' icon={faHeart} />
                            <SearchModal/>
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