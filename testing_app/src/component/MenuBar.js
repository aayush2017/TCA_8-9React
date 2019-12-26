import React from 'react';
import {  NavLink } from 'react-router-dom';

import { Navbar, Nav, Container } from 'react-bootstrap';

class MenuBar extends React.Component {
  render () {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
        <Navbar.Brand href="/">NavLogo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/" className="nav-link" exact activeClassName="active" >Header</NavLink>
            <NavLink to="/Velit" className="nav-link" exact activeClassName="active">Velit</NavLink>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } // Render
} // Class

export default MenuBar;
