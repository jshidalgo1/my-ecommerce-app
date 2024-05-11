import React from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Logout = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'rgba(0, 0, 0, 0.5) url("https://drive.google.com/uc?export=view&id=1ItxClMa5mSR8Zt1Y3nm24taZbRZ1NHAj") no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container
        className="mt-5"
        style={{
          width: '100%',
          maxWidth: '500px',
          backgroundColor: '#f8f9fa',
          padding: '40px',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <img
          src="https://drive.google.com/uc?export=view&id=1gs1z03yaEQFWLcKqtapLtDBB7EPpshwt"
          alt="Your Logo"
          height="50"
          className="d-block mx-auto mb-4"
        />
        <h4 className="text-center mb-4 dark-text">Account Logged Out</h4>
        
        <Alert variant="warning" className="dark-text">
          Warning: Your account has been successfully logged out.
        </Alert>
        
        <Link to="/">
          <Button
            className="w-100 mt-3 home-button"
            style={{
              backgroundColor: 'white',
              color: '#757575',
              borderColor: '#e8e9eb',
              marginTop: '20px',
              padding: '10px',
            }}
          >
            <i className="fas fa-home mr-2" style={{ color: '#4CAF50' }}></i><strong>&nbsp;HOME</strong>
          </Button>
        </Link>

        <Link to="/signin">
          <Button
            variant="success"
            className="w-100 mt-3 signin-button"
            style={{
              marginTop: '10px',
              padding: '10px',
              backgroundColor: '#4CAF50',
            }}
          >
            <i className="fas fa-sign-in-alt mr-2"></i>&nbsp; SIGN IN
          </Button>
        </Link>
        
        <p style={{ fontFamily: 'Lato, sans-serif', marginTop: '10px' }}>
          Don't have an account?{' '}
          <Link
            to="/signup"
            style={{ color: '#4CAF50', fontWeight: 'bold', textDecoration: 'none' }}
            className="signup-link"
          >
            Sign up
          </Link>
        </p>
      </Container>
    </div>
  );
};

export default Logout;
