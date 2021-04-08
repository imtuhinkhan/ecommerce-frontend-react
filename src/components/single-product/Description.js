import React, {Component} from 'react';
import {Container, Table} from "react-bootstrap";

class Description extends Component {
    render() {
        return (
            <>
                <Container fluid={true}>
                    <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th colSpan={2}>Product Details of Suzuki GSXR 150</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <tr>1</tr>
                        <td>Mark</td>
                    </tr>
                    <tr>
                        <tr>2</tr>
                        <td>Jacob</td>
                    </tr>
                    <tr>
                        <tr>3</tr>
                        <td>3</td>
                    </tr>
                    </tbody>
                </Table>
                </Container>
            </>
        );
    }
}

export default Description;