import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar  expand="lg"  className="navbar-custom">
    <Container>
      <Navbar.Brand href="/" className="black-text">
        <b>Huizenmarkt nederland</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className="ml-auto">
        <div className="nav-link-container">
            <Nav.Link href="/hypotheekrentes" className="black-text"><b>Hypotheekrentes</b></Nav.Link>
        </div>
        <div className="nav-link-container">
            <Nav.Link href="/huizenprijzen" className="black-text"><b>Huizenprijzen</b></Nav.Link>
        </div>
        <div className="nav-link-container">
            <Nav.Link href="/leencapaciteit" className="black-text"><b>Leencapaciteit</b></Nav.Link>
        </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;
