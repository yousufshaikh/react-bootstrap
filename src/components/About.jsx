import React, { Component } from 'react';
import {Grid, Row ,Col, Image} from 'react-bootstrap';
import '../styles/About.css'

class About extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <Image src="assets/dog-people.jpg" responsive className="header-image"/>
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row>
                        <Col xs={12} sm={8} smOffset={2}>
                            <Image src="assets/person-1.jpg" className="about-profile-pic"/> 
                            <h3>Ismail The Tank</h3>    
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ipsa officiis.</p>
                            <p>Eal eum ab itaque voluptatibus corrupti sapiente repudiandae explicabo eaque saepe.</p>
                            <p>Quae vel, accusantium, esse debitis temporibus soluta suscipit.</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default About;