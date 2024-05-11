import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import {  Link, NavLink, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Header.css'; 

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    navigate('/logout');
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="sticky-top custom-navbar">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="#home">
            <NavLink to="/admin-dashboard">
              <img
                src="https://drive.google.com/uc?export=view&id=1gs1z03yaEQFWLcKqtapLtDBB7EPpshwt"
                alt="HarvestHub PH"
                height="50"
                className="d-inline-block align-top"
              />
            </NavLink>
          </Navbar.Brand>

          {/* Responsive Navbar Toggle Button */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navbar Links */}
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mr-auto">
              <NavLink
                to="/admin-dashboard/user-accounts"
                className="nav-link text-success"
                activeClassName="active"
                style={{fontFamily: 'Montserrat'}}
              >
                <h6 className="fw-bold" style={{color: '#4CAF50'}}>User Accounts</h6>
              </NavLink>
              <NavLink
                to="/admin-dashboard/products"
                className="nav-link text-success"
                activeClassName="active"
                style={{fontFamily: 'Montserrat'}}
              >
                <h6 className="fw-bold" style={{color: '#4CAF50'}}>Product Listings</h6>
              </NavLink>
              <NavLink
                to="/admin-dashboard/orders"
                className="nav-link text-success"
                activeClassName="active"
                style={{fontFamily: 'Montserrat'}}
              >
                 <h6 className="fw-bold" style={{color: '#4CAF50'}}>Order Fulfillments</h6>
              </NavLink>
              <NavLink
                to="/admin-dashboard/sales-reports"
                className="nav-link text-success"
                activeClassName="active"
                style={{fontFamily: 'Montserrat'}}
              >
                 <h6 className="fw-bold" style={{color: '#4CAF50'}}>Sales Reports</h6>
              </NavLink>
              <Link to="/admin-dashboard/logout">
                  <Button onClick={handleLogout} variant="outline-gray" className="ml-3">
                  <span style={{fontFamily: 'Montserrat'}}>Logout</span>
                  </Button>
              </Link>
            </Nav>
              
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />

    

    </>
  );
};

export default AdminHeader;
