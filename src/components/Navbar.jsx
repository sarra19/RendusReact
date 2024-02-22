import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function NavigationBar (){
    


return(
<>
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">MyEvents</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="events" style={({isActive})=>({textDecoderation:isActive?"underline":"none"})}>Events</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
)
}