// Banner.js
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
  const imageStyle = {
    maxHeight: '90vh',
    minHeight: '90vh',
    width: '100%',
    objectFit: 'cover',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(76, 175, 80, 0.5), rgba(255, 193, 7, 0.5))',
  };

  const captionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    height: '100%',
  };

  const headingStyle = {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    marginBottom: '1rem',
    lineHeight: '1.2',
    fontSize: '2.5rem', 
  };

  const paragraphStyle = {
    fontFamily: 'Lato',
    marginBottom: '3rem',
    lineHeight: '1.4',
    fontSize: '1.6rem', 
  };

  const buttonStyle = {
    fontFamily: 'Montserrat',
    borderRadius: '50px',
    padding: '10px 16px',
    backgroundColor: '#4CAF50',
    border: 'white',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.3rem',
  };

  return (
    <div className="banner" style={{marginBottom: '100px'}}>
      <Carousel interval={3000}>
        <Carousel.Item>
          <img
            style={imageStyle}
            src="https://drive.google.com/uc?export=view&id=1h4V9TjPSHLwB-Tzuz_4FlBcSAzwU2uRm"
            alt="First slide"
          />
          <div style={overlayStyle}></div>
          <Carousel.Caption style={captionStyle}>
            <div className="container text-left">
              <h3 className="mb-3" style={headingStyle}>
                Empowering Filipino Farmers, Nourishing Communities.
              </h3>
              <p style={paragraphStyle} className="text-lg">
                Welcome to Our Farm-to-Table Marketplace!
              </p>
              <Link to="/signin">
                <Button style={buttonStyle}>
                  VISIT STORE
                </Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={imageStyle}
            src="https://drive.google.com/uc?export=view&id=1TNLQqt5bWJ6W_nrcpCUeCrOnw9_5qz3s"
            alt="Second slide"
          />
          <div style={overlayStyle}></div>
          <Carousel.Caption style={captionStyle}>
            <div className="container text-left">
              <h3 className="mb-3" style={headingStyle}>
                Connecting You to the Heart of Agriculture.
              </h3>
              <p style={paragraphStyle} className="text-lg">
                Shop at lowest prices from Filipino Farmers for Fresh, Local Produce.
              </p>
              <Link to="/signin">
                <Button style={buttonStyle}>
                  VISIT STORE
                </Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={imageStyle}
            src="https://drive.google.com/uc?export=view&id=1wH0Az8Hj3Zcf8NlXprLguy-hnh-yc9Ej"
            alt="Third slide"
          />
          <div style={overlayStyle}></div>
          <Carousel.Caption style={captionStyle}>
            <div className="container text-left">
              <h3 className="mb-3" style={headingStyle}>
                From Farm to Your Table, Supporting Local Agriculture.
              </h3>
              <p style={paragraphStyle} className="text-lg">
                Experience the Taste of Filipino Harvests, One Click Away.
              </p>
              <Link to="/signin">
                <Button style={buttonStyle}>
                  VISIT STORE
                </Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>


      </Carousel>
    </div>
  );
};

export default Banner;
