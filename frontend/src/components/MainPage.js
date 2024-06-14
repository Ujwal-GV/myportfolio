import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

export default function MainPage() {
  return (
    <div className="Container">
        <Navbar expand="lg" className="bg-body-primary">
          <Container fluid>
            <Navbar.Brand href="#">UJWAL GOWDA V</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/main/about">About</Nav.Link>
                <Nav.Link href="/main/skills">Skills</Nav.Link>
                <Nav.Link href="/main/projects">Projects</Nav.Link>
                <Nav.Link href="/main/certificates" >Certificates</Nav.Link>
                <Nav.Link href="/main/connect">Connect</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}
