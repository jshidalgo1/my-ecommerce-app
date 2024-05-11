import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer.js';

const PrivacyPolicy = () => {
  return (
    <>
    <Container>
      <Row>
        <Col>
          <h2 className="mt-5">Privacy Policy</h2>

          <p className="lead">
            This Privacy Policy describes how your personal information is collected, used, and shared when you use our service.
          </p>

          <h3>Information We Collect</h3>

          <p>
            We collect information you provide directly when you sign up for an account, including your name, email address, and other contact details.
          </p>

          <h3>How We Use Your Information</h3>

          <p>
            We use the information we collect to provide and improve our services, communicate with you, and send you updates and promotional content.
          </p>

          <h3>Sharing Your Information</h3>

          <p>
            We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website or servicing you, as long as those parties agree to keep this information confidential.
          </p>

          <h3>Security</h3>

          <p>
            We take reasonable measures to protect your personal information from unauthorized access or disclosure.
          </p>

          <h3>Changes to This Privacy Policy</h3>

          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>

          <p className="small">
            This Privacy Policy was last updated on December 12, 2023.
          </p>
        </Col>
      </Row>
      
    </Container>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;
