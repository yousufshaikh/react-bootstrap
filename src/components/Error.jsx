import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class Error extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col lg={12}>
                        <h1>Page not found !!</h1>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Error;