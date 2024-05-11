import React, { useState } from 'react';
import { Navbar, Container, Dropdown } from 'react-bootstrap';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import CartDisplay from './CartDisplay.js';

const StoreHeader = ({ cart, setCart, handleCheckout, removeFromCart }) => {
  const [isCartVisible, setCartVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    navigate('/logout');
  };

  const handleCartClick = () => {
    setCartVisible(!isCartVisible);
  };


  return (
    <>
      <Navbar bg="light" expand="lg" className="sticky-top custom-navbar">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="#home">
            <Link to='/store'>
              <img
                src="https://drive.google.com/uc?export=view&id=1gs1z03yaEQFWLcKqtapLtDBB7EPpshwt"
                alt="Your Logo"
                height="50"
                className="d-inline-block align-top"
              />
            </Link>
          </Navbar.Brand>

          {/* Responsive Navbar Toggle Button */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navbar Links */}
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            {/* Shopping Cart Icon */}
            <div
              className="custom-nav-link text-success position-relative"
              style={{ marginRight: '40px', color: '#4CAF50', cursor: 'pointer' }}
              onClick={handleCartClick}
            >
              <i className="fas fa-shopping-cart" style={{ color: '#4CAF50' }}></i>
              {/* Render CartDisplay component */}
              {isCartVisible && (
                <CartDisplay cart={cart} setCart={setCart} handleCheckout={handleCheckout} removeFromCart={removeFromCart}  isVisible={isCartVisible} />
              )}
            </div>

            {/* Account Dropdown */}
            <Dropdown>
              <Dropdown.Toggle variant="default" id="account-dropdown" className="custom-dropdown-toggle">
                Account
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/store/profile" className="custom-dropdown-item">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout} className="custom-dropdown-item">
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default StoreHeader;
