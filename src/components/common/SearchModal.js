import React, {Component} from 'react';
import {Button, Form, FormControl, Modal} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

class SearchModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            show:false,
        }
    }
    render() {
        return (
            <>
            <FontAwesomeIcon className='fa faAccount' icon={faSearch} onClick={this.handleShow}/>

                    <Modal show={this.state.show} onHide={this.handleClose} size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Type Something For Search.....</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2 col-10" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
            </>
        );
    }
     handleClose = () => {
        this.setState({
            show:false,
        })
     };
    handleShow = () => {
        this.setState({
            show:true
        })
    };
}

export default SearchModal;