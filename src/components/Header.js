import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';


function Header() {
  return (
    <Navbar  expand="lg"  className="navbar-custom">
    <Container>
      <Navbar.Brand href="/" className="text-white">
        Reformed Degen
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className="ml-auto">
        <div className="nav-link-container">
            <Nav.Link href="#markets" className="text-white">Markets</Nav.Link>
        </div>
        <div className="nav-link-container">
            <Nav.Link href="#marketanalysis" className="text-white">Market Analysis</Nav.Link>
        </div>
        <div className="nav-link-container">
            <Nav.Link href="#strategies" className="text-white">Strategies</Nav.Link>
        </div>
        <div className="nav-link-container">
            <Nav.Link href="#portfolio" className="text-white">Portfolio</Nav.Link>
        </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;
