import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleSubscribe = () => {
    // Check if the email is valid and not empty before subscribing
    if (isValidEmail && email.trim() !== '') {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 10000);
    }
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailPattern.test(enteredEmail));
    setEmail(enteredEmail);
  };

  return (
    <div className="newsletter-container p-4" style={{ background: 'linear-gradient(to right, #4CAF50, #FFC107 130%, #4CAF50)', minHeight: '45vh' }}>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-md-6 mb-md-0 mb-4 mt-5">
            <h2 className="mb-4" style={{ fontWeight: 'bold', color: '#FFC107' }}>
              Subscribe to our Newsletter
            </h2>
            <h5 style={{ color: 'white', lineHeight: '1.5', marginRight: '50px' }}>
              Get a chance to stay informed about restocks, promotions, and new arrivals in our crop and poultry product lineup by subscribing to our bi-weekly newsletter that comes out every Monday and Friday.
            </h5>
          </div>
          <div className="col-md-6 col-12">
            {subscribed ? (
              <Alert variant="success" className="mt-3" style={{ fontFamily: 'Montserrat', color: '#4CAF50' }}>
                Thanks for subscribing!
              </Alert>
            ) : (
              <Form>
                <Form.Group controlId="formBasicEmail" className="mb-3 mt-4">
                  <Form.Control
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={handleEmailChange}
                    isInvalid={!isValidEmail}
                    style={{ borderRadius: '2px', padding: '12px', fontSize: '16px', maxWidth: '500px' }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email address.
                  </Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    <i>We'll never share your email with anyone else.</i>
                  </Form.Text>
                </Form.Group>
                <Button
                  variant="success"
                  className="cstm-btn2"
                  style={{ fontWeight: 'bold', padding: '14px 20px', marginTop: '20px' }}
                  onClick={handleSubscribe}
                  block
                  disabled={!isValidEmail}
                >
                  SIGN ME UP
                </Button>
              </Form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
