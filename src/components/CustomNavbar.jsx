import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/" >CodeLife.io</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem to="/" eventKey={1} componentClass={Link}>
                            Home
                        </NavItem>
                        <NavItem to="/about" eventKey={2} componentClass={Link}>
                            About
                        </NavItem>
                        <NavItem to="/news" eventKey={3} componentClass={Link}>
                            News
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavbar;