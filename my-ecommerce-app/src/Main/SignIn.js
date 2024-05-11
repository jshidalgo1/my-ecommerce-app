  // SignIn.js in the frontend
  import React, { useState } from 'react';
  import { Container, Form, Button, Alert } from 'react-bootstrap';
  import { useNavigate } from 'react-router-dom';
  import { Link, NavLink } from 'react-router-dom';
  import { useUser } from './UserContext.js';


  const SignIn = () => {
    const { setUserId } = useUser();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch('http://localhost:5000/api/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
          // After successful sign-in, store the user ID
          setUserId(data.userId);
          // After successful sign-in, navigate to the desired destination
          navigate(data.redirectTo);
        } else {
          // Handle sign-in error
          setError(data.message);
        }
      } catch (error) {
        console.error('Error during sign-in:', error.message);
      }
    };

    return (
      <div
      className="imageOverlay bg-dark"
      style={{
          minHeight: '100vh',
          background: 'rgba(0, 0, 0, 0.5) url("https://drive.google.com/uc?export=view&id=1ItxClMa5mSR8Zt1Y3nm24taZbRZ1NHAj") no-repeat', // Fix: no-repeat
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      }}
      >
      <Container className="mt-5" style={{ width: '500px', backgroundColor: '#f8f9fa', padding: '40px', borderRadius: '8px'}}>
      <NavLink to="/">
        <img
          src="https://drive.google.com/uc?export=view&id=1gs1z03yaEQFWLcKqtapLtDBB7EPpshwt"
          alt="Your Logo"
          height="50"
          className="d-block mx-auto mb-4"
        />
      </ NavLink>
      <h4 className="text-center mb-4 dark-text">Sign In as Admin or Customer</h4>
        <Form onSubmit={handleSignIn}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="dark-text" style={{ paddingTop: '20px'}}>Email address</Form.Label>
            <Form.Control input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="dark-text" style={{ paddingTop: '20px'}}>Password</Form.Label>
            <Form.Control input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
          </Form.Group>

          <Button onClick={handleSignIn} variant="success" type="submit" className="w-100 mt-3 cstm-btn" style={{ marginTop: '10px', padding: '10px'}}>
            <i className="fas fa-sign-in-alt mr-2"></i> Sign In 
          </Button>

          
          {error && <Alert variant="danger" className="error-alert">{error}</Alert>} 

        </Form>
        <p style={{ fontFamily: 'Lato, sans-serif', marginTop: '10px', textAlign: 'center' }}>
          Don't have an account? <Link to="/signup" style={{ color: '#4CAF50', fontWeight: 'bold', textDecoration: 'none' }}>Sign up</Link>
        </p>

      </Container>
      </div>
    );
  };

  export default SignIn;