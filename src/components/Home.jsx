import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import '../styles/Home.css'

class Home extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Jumbotron className="">
                        <h2>Welcome to CodeLife.io</h2>
                        <p>This is how to build a website using React, React-Router & React-Bootstrap</p>
                        <Link to="/about">
                            <Button bsStyle="primary">About</Button>
                        </Link>
                    </Jumbotron>
                </Grid>
                <Grid>
                    <Row className="text-center show-grid">
                        <Col xs={12} sm={4}>
                            <Image src="assets/person-1.jpg" circle />
                            <h1>Ismail Haq</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, enim. Odio, animi quaerat doloribus cupiditate accusamus sapiente repudiandae asperiores, quas vel facere perferendis voluptas, voluptates aliquam totam quam a molestiae.</p>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Image src="assets/person-2.jpg" circle />
                            <h1>Sonia Khan</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, enim. Odio, animi quaerat doloribus cupiditate accusamus sapiente repudiandae asperiores, quas vel facere perferendis voluptas, voluptates aliquam totam quam a molestiae.</p>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Image src="assets/person-3.jpg" circle />
                            <h1>Arshad Azam</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, enim. Odio, animi quaerat doloribus cupiditate accusamus sapiente repudiandae asperiores, quas vel facere perferendis voluptas, voluptates aliquam totam quam a molestiae.</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Home;
