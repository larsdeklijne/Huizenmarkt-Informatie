import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar  expand="lg"  className="navbar-custom">
    <Container>
      <Navbar.Brand href="/" className="text-white">
        Huizenmarkt waanzin
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className="ml-auto">
        <div className="nav-link-container">
            <Nav.Link href="#markets" className="text-white">Hypotheekrentes</Nav.Link>
        </div>
        <div className="nav-link-container">
            <Nav.Link href="#marketanalysis" className="text-white">Huizenprijzen</Nav.Link>
        </div>
        <div className="nav-link-container">
            <Nav.Link href="#strategies" className="text-white">Leencapaciteit</Nav.Link>
        </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;
