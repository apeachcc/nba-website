import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import './Header.css';

const Header = () => {
  return (
    <Navbar expand="md" className="header">
      <Navbar.Brand href="/">
        <img
          src="
          https://images.emojiterra.com/twitter/v14.0/128px/1f3c0.png
          "
          className="d-inline-block align-top logo"
          alt="NBA Website Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" className="nav-link">Home</Nav.Link>
          <Nav.Link href="/Stats" className="nav-link">Game Stats</Nav.Link>
          <Nav.Link href="/schedule" className="nav-link">Game Schedule</Nav.Link>
          <Nav.Link href="/contact" className="nav-link">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
