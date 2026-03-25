import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar expand="lg" sticky="top" className="py-4 shadow-none">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3 text-white">
           Abuzar<span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>.dev</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none bg-white opacity-50" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Work</Nav.Link>
            <Nav.Link href="#contact" className="me-lg-3">Contact</Nav.Link>
            <Nav.Link href="#contact" className="p-0 mt-3 mt-lg-0">
              <Button className="btn-primary-custom rounded-pill px-4 fw-bold">Contact</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
