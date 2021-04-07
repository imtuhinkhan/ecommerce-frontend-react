import React, {Component} from 'react';
import {Button, Container, Form, FormControl, Modal} from "react-bootstrap";

class SearchModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            show:this.props.show,
        }
    }
    render() {
        return (
            <>
                <Container>
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
                </Container>
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