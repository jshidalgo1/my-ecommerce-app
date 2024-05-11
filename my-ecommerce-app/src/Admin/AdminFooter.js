import React from 'react';
import { Navbar, Container, Nav, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowUp} from 'react-bootstrap-icons';
import '../Footer.css';

const AdminFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer> 
      <Container className="mt-5">
        <Row>
          {/* Admin Section */}
          <Col md={4}className='mt-3 mb-4'>
          <Navbar.Brand as={Link} to="/">
                <img
                  src="https://drive.google.com/uc?export=view&id=1gs1z03yaEQFWLcKqtapLtDBB7EPpshwt"
                  height="50"
                  className="d-inline-block align-top"
                  alt="Logo"
                />
          </Navbar.Brand>
          </Col>
          <Col md={2} className="mb-3">
            <Navbar bg="light" variant="light" expand="md" className="mb-3">
              
                <Nav className="flex-column">
                  <Nav.Link as={Link} to="/admin-dashboard">
                    <h6><b>Admin Dashboard</b></h6>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/admin-dashboard/user-accounts">
                    <h6>User Accounts</h6>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/admin-dashboard/products">
                    <h6>Product Listings</h6>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/admin-dashboard/orders">
                    <h6>Order Fulfillments</h6>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/admin-dashboard/sales-reports">
                    <h6>Sales Reports</h6>
                  </Nav.Link>
                </Nav>
            </Navbar>
          </Col>

          {/* Customer Section */}
          <Col md={2} className="mb-3">
            <Navbar bg="light" variant="light" expand="md">
                <Nav className="flex-column">
                  <Nav.Link as={Link} to="/">
                    <h6><b>Home</b></h6>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/store">
                    <h6>Store</h6>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    <h6>About</h6>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/privacy-policy" target="_blank">
                    <h6>Privacy Policy</h6>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/terms"  target="_blank">
                    <h6>Terms of Service</h6>
                  </Nav.Link>
                </Nav>
            </Navbar>
          </Col>

          <Col md={2} className="mb-3">
            <Navbar bg="light" variant="light" expand="md">
                <Nav className="flex-column">
                  <Nav.Link as={Link} to="https://support.google.com/android/answer/3118621?hl=en" target="_blank">
                    <h6><b>Settings</b></h6>
                  </Nav.Link>
                  <Nav.Link as={Link} to="https://support.google.com/?hl=en" target="_blank">
                    <h6>Help</h6>
                  </Nav.Link>
                </Nav>
            </Navbar>
          </Col>

          {/* Back to Top button */}
          <Col md={2} className="text-center">
            <Button variant="outline-dark" onClick={scrollToTop} className="back-to-top-btn mt-3">
              <ArrowUp size={20} />
            </Button>
          </Col>
        </Row>
      </Container>

      {/* All rights reserved */}
      <div className="text-center mt-3">
        <p style={{ fontFamily: 'Montserrat' }}>&copy; {new Date().getFullYear()} HarvestHub Philippines. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default AdminFooter;
