import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer.js';

const TermsOfUse = () => {
  const headerStyle = { fontFamily: 'Montserrat', marginTop: '20px' };
  const bodyStyle = { fontFamily: 'Lato', color: '#757575' };

  return (
    <>
    <Container>
      <Row className="mt-4 mb-5">
        <Col md={12}>
          <h2 style={{ fontFamily: 'Montserrat', color: '#4CAF50', fontWeight: 'bold'}}>Terms of Use</h2>

          <p style={bodyStyle}>
            By accessing and using HarvestHubph.com (the "Website"), you agree to the following Terms of Use. Please read
            them carefully.
          </p>

          <h3 style={headerStyle}>1. Acceptance of Terms</h3>

          <p style={bodyStyle}>
            <strong>1.1.</strong> By accessing this website, you agree to be bound by these Terms of Use and all
            applicable laws and regulations.
          </p>

          <p style={bodyStyle}>
            <strong>1.2.</strong> If you do not agree with any of these terms, you are prohibited from using or
            accessing this site.
          </p>

          <h3 style={headerStyle}>2. User Responsibilities</h3>

          <p style={bodyStyle}>
            <strong>2.1.</strong> Users are responsible for maintaining the confidentiality of their account and password.
          </p>

          <p style={bodyStyle}>
            <strong>2.2.</strong> Users must not engage in any activity that could disrupt or interfere with the proper
            functioning of the website.
          </p>

          <h3 style={headerStyle}>3. Intellectual Property</h3>

          <p style={bodyStyle}>
            <strong>3.1.</strong> The content, design, and graphics on this website are owned by HarvestHubph.com and
            are protected by intellectual property laws.
          </p>

          <p style={bodyStyle}>
            <strong>3.2.</strong> Users may not reproduce, distribute, or create derivative works without our express
            permission.
          </p>

          <h3 style={headerStyle}>4. User Content</h3>

          <p style={bodyStyle}>
            <strong>4.1.</strong> Users are solely responsible for the content they submit on the website.
          </p>

          <p style={bodyStyle}>
            <strong>4.2.</strong> HarvestHubph.com reserves the right to remove or modify any user content at its
            discretion.
          </p>

          <h3 style={headerStyle}>5. Privacy</h3>

          <p style={bodyStyle}>
            <strong>5.1.</strong> Our Privacy Policy outlines how user information is collected, used, and protected.
          </p>

          <h3 style={headerStyle}>6. Limitation of Liability</h3>

          <p style={bodyStyle}>
            <strong>6.1.</strong> HarvestHubph.com is not liable for any direct, indirect, or consequential damages
            arising out of the use or inability to use the website.
          </p>

          <p style={bodyStyle}>
            <strong>6.2.</strong> We do not warrant the accuracy, completeness, or reliability of any content on the
            website.
          </p>

          <h3 style={headerStyle}>7. Modifications</h3>

          <p style={bodyStyle}>
            <strong>7.1.</strong> HarvestHubph.com may revise these terms at any time without notice. By using this
            website, you agree to be bound by the current version of these Terms of Use.
          </p>

          <h3 style={headerStyle}>8. Governing Law</h3>

          <p style={bodyStyle}>
            <strong>8.1.</strong> These terms and conditions are governed by and construed in accordance with the laws of
            the Philippine Jurisdiction.
          </p>

          <p style={bodyStyle}>
            If you have any questions or concerns about these Terms of Use, please contact us at harvesthub.info@gmail.com.
          </p>
        </Col>
      </Row>
    </Container>
    <Footer />
    </>
  );
  
};

export default TermsOfUse;
