import React, { Component } from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import '../styles/News.css';

class News extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <Image src="assets/mountain-man.jpg" responsive/>
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <h2>News</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8} className="main-section">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut impedit quasi natus. Molestias hic consequatur accusamus. Eum, unde ipsam magnam dicta at incidunt, possimus tenetur debitis nesciunt nihil iure repellat.</p> 
                            <p>Culpa autem aperiam id enim obcaecati laborum possimus consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic dignissimos omnis quam eaque fuga. Et dolorum cum incidunt adipisci quia eveniet, eos necessitatibus dolorem hic tempore tenetur animi accusantium.</p> 
                            <p>quos quae ullam vel laudantium, nulla quis, pariatur officia, eum in exercitationem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, pariatur commodi nesciunt libero atque accusantium ex deserunt laborum, nobis ipsa, repudiandae nam! Voluptate, aliquam! A culpa fuga commodi dolorum quidem. </p>
                            <p>laborum possimus ipsum dolor sit amet consectetur id enim obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempore quaerat exercitationem perspiciatis suscipit nesciunt culpa at explicabo natus unde, velit sequi numquam minus autem pariatur cumque saepe assumenda modi. </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit beatae reiciendis at, tempore consequuntur sint totam nobis laboriosam doloremque, possimus corrupti officiis dolorem quisquam voluptas sed quidem rerum error facere.</p>
                        </Col>
                        <Col sm={4} className="sidebar-section">
                            <Image src="assets/dog-people.jpg" responsive/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi necessitatibus nostrum unde accusamus enim, error doloribus deleniti, maxime possimus autem numquam assumenda architecto officiis ullam ducimus. At ullam iure sequi.</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default News;