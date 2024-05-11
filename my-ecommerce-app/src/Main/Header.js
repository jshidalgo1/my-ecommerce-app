// Header.js
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import '../Header.css';

const Header = () => {
  return (
    <>
    <Navbar bg="light" expand="lg"  className="custom-navbar">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home">
          <Link to='/'>
          <img
            src="https://drive.google.com/uc?export=view&id=1gs1z03yaEQFWLcKqtapLtDBB7EPpshwt"  
            alt="HarvestHub PH Logo"
            height="50"  
            className="d-inline-block align-top"
          />
          </Link>
        </Navbar.Brand>

        {/* Responsive Navbar Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Link to={'/signin'} className="custom-nav-link" style={{ fontFamily: 'Montserrat', color: '#4CAF50', fontWeight: 'bold' }}>SHOP NOW</Link>
          <Link to={'/about'} className="custom-nav-link" style={{fontFamily: 'Montserrat', color: '#4CAF50' }}>Our Company</Link>
        </Nav>

          {/* Sign In and Sign Up Buttons */}
          <div className="ml-3">
            <Link to="/signin" className="btn btn-outline-success mx-2 cstm-btn2" style={{fontFamily: 'Montserrat'}}>
              Sign In
            </Link>
            <Link to="/signup">
                <Button variant="success" style={{fontSize: '1rem', fontFamily: 'Montserrat', backgroundColor: '#4CAF50', border: 'none'}}>Sign Up</Button>
            </Link>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </>
  );
};

export default Header;
