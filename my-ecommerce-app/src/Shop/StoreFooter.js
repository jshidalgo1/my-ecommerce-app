// StoreFooter.js

import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowUp, Facebook, Instagram, Envelope, Linkedin } from 'react-bootstrap-icons';
import '../Footer.css';

const StoreFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <Navbar bg="light" variant="light" expand="md" className="mt-3">
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://drive.google.com/uc?export=view&id=1gs1z03yaEQFWLcKqtapLtDBB7EPpshwt"
              height="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>

            {/* Links */}
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/store">
                <h5>Store</h5>
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                <h5>About</h5>
              </Nav.Link>
              <Nav.Link as={Link} to="/privacy-policy" target="_blank">
                <h5>Privacy Policy</h5>
              </Nav.Link>
              <Nav.Link as={Link} to="/terms" target="_blank">
                <h5>Terms of Use</h5>
              </Nav.Link>
              <Nav.Link href="https://www.da.gov.ph/" target="_blank">
              <h5><strong>Department of Agriculture</strong></h5>
              </Nav.Link>
              {/* Back to Top button */}
          <div className="m-3">
            <Button variant="outline-dark" onClick={scrollToTop} className="back-to-top-btn">
              <ArrowUp size={20} />
            </Button>
          </div>
              
            </Nav>

          
          
        </Container>
        
      </Navbar>

    {/* Get in touch with us and Map on the same row */}
      <Container className="mt-0">
        <div className="row">
          {/* Get in touch with us */}
          <div className="col-md-6">
            <div className="get-in-touch">
              <div className="social-icons social-icons-left"> 
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <Facebook size={30} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <Instagram size={30} />
                </a>
                <a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Envelope size={30} />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={30} />
                </a>
              </div>
              <h6 style={{ padding: '5px', lineHeight: '1.5' }}>
                <strong>Get in touch with us:</strong>
                <br />
                Physical Science Building, UPLB, Los Baños, Philippines
                <br />
                Contact: +64 976-523-834
              </h6>
            </div>
          </div>

          {/* Map */}
          <div className="col-md-6">
            <div className="map">
              <iframe
                title="Map"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.466413468443!2d121.24077967590667!3d14.167438387533252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd60b71cf1cd7b%3A0x1c2156f5ff019cc9!2sUPLB%20Gate!5e0!3m2!1sen!2sph!4v1702025445631!5m2!1sen!2sph"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
      

      {/* All rights reserved */}
      <div className="text-center mt-3">
        <p style={{fontFamily: 'Montserrat' }}>&copy; {new Date().getFullYear()} HarvestHub Philippines. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default StoreFooter;
