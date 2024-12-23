import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavbarMenu() {
  return (
    <><Navbar bg="dark" data-bs-theme="dark">
          <Container>
              <Navbar.Brand href="#home">Hunny-Do List</Navbar.Brand>
              <Nav className="me-auto">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/contactus">ContactUs</Nav.Link>
              </Nav>
          </Container>
    </Navbar></>
  )
}
